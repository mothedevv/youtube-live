const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
	signUp: async (req, res) => {
		try {
			const { firstName, lastName, email, username, password, passwordCheck } =
				req.body;

			// if not all fields are filled out then display a message
			(!firstName ||
				!lastName ||
				!email ||
				!username ||
				!password ||
				!passwordCheck) &&
				res.status(422).json({ msg: 'Please fill out all fields.' });

			const existingEmail = await db.User.findOne({ email: email });
			existingEmail &&
				res
					.status(422)
					.json({ msg: 'The email is already registered with an account.' });

			const existingUsername = await db.User.findOne({ username: username });
			existingUsername &&
				res
					.status(422)
					.json({ msg: 'That username is already taken. Please try again.' });

			password.length < 6 &&
				res
					.status(422)
					.json({ msg: 'Password must be at least 6 characters.' });

			if (password !== passwordCheck) {
				res
					.status(422)
					.json({ msg: 'Passwords do not match. Please try again.' });
			} else {
				const salt = await bcrypt.genSalt();
				const passwordHash = await bcrypt.hash(password, salt);

				await db.User.create({
					firstName: firstName,
					lastName: lastName,
					username: username,
					email: email,
					password: passwordHash,
				})
					.then((dbModel) => res.json(dbModel))
					.catch((err) => res.status(422).json(err));
			}
		} catch (err) {
			res.status(422).json(err);
		}
	},

	login: async (req, res) => {
		try {
			const { username, password } = req.body;

			(!username || !password) &&
				res.status(422).json({ msg: 'Please fill out all fields.' });

			const user = await db.User.findOne({ username: username });

			!user &&
				res
					.status(422)
					.json({ msg: 'Username has not been registered. Please try again.' });

			const isMatch = await bcrypt.compare(password, user.password);
			!isMatch &&
				res.status(422).json({ msg: 'Incorrect password. Please try again.' });

			const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

			res.json({
				token,
				user: {
					id: user._id,
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					username: username,
				},
			});
		} catch (err) {
			res.status(422).json(err.message);
		}
	},

	// logout: (req, res) => {
	// 	res.cookie('jwt', '', { maxAge: 1 });
	// 	res.redirect('/');
	// },
};
