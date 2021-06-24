const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
});

// Mongoose pre middleware to salt and hash passwords before being saved to database
UserSchema.pre('save', function (next) {
	const user = this;

	// if password has been modified (changed by user) OR a new user and password has been entered,
	if (this.isModified('password') || this.isNew) {
		// then hash password
		bcrypt.genSalt(10, function (saltError, salt) {
			if (saltError) {
				return next(saltError);
			} else {
				bcrypt.hash(user.password, salt, function (hashError, hash) {
					if (hashError) {
						return next(hashError);
					}

					user.password = hash;
					next();
				});
			}
		});
	} else {
		// otherwise, end middleware and move on
		return next();
	}
});

module.exports = mongoose.model('User', UserSchema);
