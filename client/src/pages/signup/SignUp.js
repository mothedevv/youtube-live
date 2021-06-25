import React, { useRef } from 'react';
import User from '../../utils/User';

export default function SignUp() {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const usernameRef = useRef();
	const passwordRef = useRef();
	const passwordCheckRef = useRef();

	const handleSignUp = (e) => {
		e.preventDefault();

		console.log(firstNameRef.current.value);
		console.log(lastNameRef.current.value);
		console.log(emailRef.current.value);
		console.log(usernameRef.current.value);
		console.log(passwordRef.current.value);
		console.log(passwordCheckRef.current.value);

		passwordRef.current.value === passwordCheckRef.current.value
			? User.signup({
					firstName: firstNameRef.current.value,
					lastName: lastNameRef.current.value,
					email: emailRef.current.value,
					username: usernameRef.current.value,
					password: passwordRef.current.value,
					passwordCheck: passwordCheckRef.current.value,
			  })
					.then(() => console.log('success'))
					.catch((err) => console.log(err.message))
			: alert('passwords do not match');
	};

	return (
		<div className="container my-4 d-flex justify-content-center">
			<form action="" className="col-4">
				<div className="mb-3">
					<label htmlFor="firstNameSignUp" className="form-label">
						First Name
					</label>
					<input
						type="text"
						className="form-control"
						id="firstNameSignUp"
						ref={firstNameRef}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="lastNameSignUp" className="form-label">
						Last Name
					</label>
					<input
						type="text"
						className="form-control"
						id="lastNameSignUp"
						ref={lastNameRef}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="emailSignup" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="emailSignup"
						ref={emailRef}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="usernameSignUp" className="form-label">
						Username
					</label>
					<input
						type="text"
						className="form-control"
						id="usernameSignUp"
						ref={usernameRef}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="passwordSignUp" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="passwordSignUp"
						ref={passwordRef}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="confirmPasswordSignUp" className="form-label">
						Confirm Password
					</label>
					<input
						type="password"
						className="form-control"
						id="confirmPasswordSignUp"
						ref={passwordCheckRef}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={(e) => handleSignUp(e)}
				>
					Sign Up!
				</button>
			</form>
		</div>
	);
}
