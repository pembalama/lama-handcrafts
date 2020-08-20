import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: '',
				password: '',
			});
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<div className="sign-in">
				<h2>Sign In</h2>
				{/* <span>Sign in with your email and password</span> */}
				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						type="email"
						name="email"
						value={this.state.email}
						label="Email Address *"
						required
					/>

					<FormInput
						handleChange={this.handleChange}
						type="password"
						name="password"
						value={this.state.password}
						label="Password *"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
					</div>
					<p className="account-signup">
						Don't have an account?
						<span onClick={this.props.handleToggle}> Register Here</span>
					</p>
					<div>
						<span className="linebreak">OR</span>
					</div>
					<div className="buttons">
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
