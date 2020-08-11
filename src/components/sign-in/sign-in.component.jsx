import React from 'react';

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			email: '',
			password: '',
		});
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
				<h2>Please Sign In.</h2>
				<span>Sign in with your email and password</span>
				<form action="" onSubmit={this.handleSubmit}>
					<input
						onChange={this.handleChange}
						type="email"
						name="email"
						value={this.state.email}
						required
					/>
					<label htmlFor="">Email</label>
					<input
						onChange={this.handleChange}
						type="password"
						name="password"
						value={this.state.password}
						required
					/>
					<label htmlFor="">Password</label>
					<input type="submit" value="Submit Form" />
				</form>
			</div>
		);
	}
}

export default SignIn;
