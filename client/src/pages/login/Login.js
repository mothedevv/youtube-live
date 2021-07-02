import React, { useContext, useRef } from 'react';
import { Redirect } from 'react-router';
import User from '../../utils/UserAPI';
import { UserContext } from '../../utils/UserContext';

export default function Login() {
	const [loggedIn, setLoggedIn] = useContext(UserContext);

	const usernameRef = useRef();
	const passwordRef = useRef();
	const handleLogin = (e) => {
		e.preventDefault();

		User.login({
			username: usernameRef.current.value,
			password: passwordRef.current.value,
		})
			.then((res) => setLoggedIn(res.data.logged_in))
			.catch((err) => console.log(err));
	};
	return (
		<>
			<div className="container my-4 d-flex justify-content-center">
				<form action="" className="col-4">
					<div className="mb-3">
						<label htmlFor="usernameLogin" className="form-label">
							Username
						</label>
						<input
							type="text"
							className="form-control"
							id="usernameLogin"
							ref={usernameRef}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="passwordLogin" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="passwordLogin"
							ref={passwordRef}
						/>
					</div>
					<div className="d-flex flex-column justify-content-center">
						<a href="/signup" className="mb-2">
							Don't have a user profile yet, click here to sign up!
						</a>
						<button
							type="submit"
							className="btn btn-primary"
							onClick={(e) => handleLogin(e)}
						>
							Login
						</button>
					</div>
				</form>
			</div>
			{loggedIn && <Redirect to="/dashboard" />}
		</>
	);
}
