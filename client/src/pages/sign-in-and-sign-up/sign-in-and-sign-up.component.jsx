import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

class SignInAndSignUpPage extends React.Component {
	constructor() {
		super();

		this.state = {
			registerView: false,
		};
	}

	handleToggle = () => {
		this.setState({ registerView: !this.state.registerView });
	};

	render() {
		return (
			<div className="sign-in-and-sign-up">
				{this.state.registerView ? (
					<SignUp handleToggle={this.handleToggle} />
				) : (
					<SignIn handleToggle={this.handleToggle} />
				)}
			</div>
		);
	}
}

export default SignInAndSignUpPage;
