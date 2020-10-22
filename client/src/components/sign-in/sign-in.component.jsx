import React from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user/user.actions';

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
		const { emailSignInStart } = this.props;
		const { email, password } = this.state;

		emailSignInStart(email, password);
	};

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	};

	render() {
		const { googleSignInStart } = this.props;
		return (
			<div className="sign-in">
				<h2>Sign In.</h2>
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
						<span onClick={this.props.handleToggle}> Create One Now</span>
					</p>
					<div>
						<span className="linebreak">OR</span>
					</div>
					<div className="buttons">
						<CustomButton
							type="button"
							onClick={googleSignInStart}
							isGoogleSignIn
						>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(
			emailSignInStart({
				email,
				password,
			})
		),
});

export default connect(null, mapDispatchToProps)(SignIn);
