const db = require('../models');
const bcrypt = require('bcryptjs');

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
				res.status(400).json({ msg: 'Please fill out all fields.' });

			const existingEmail = await db.User.findOne({ email: email });
			existingEmail &&
				res
					.status(400)
					.json({ msg: 'The email is already registered with an account.' });

			const existingUsername = await db.User.findOne({ username: username });
			existingUsername &&
				res
					.status(400)
					.json({ msg: 'That username is already taken. Please try again.' });

			password.length < 6 &&
				res
					.status(400)
					.json({ msg: 'Password must be at least 6 characters.' });

			if (password !== passwordCheck) {
				res
					.status(400)
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
			res.status(422).json(err.message);
		}
	},
};
