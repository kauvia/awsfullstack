import React, { Component } from "react";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: "stevenson",
			password: "sonofsteve"
		};
	}
	handleChange = e => {
		console.log(e.target);
		const target = e.target;
		this.setState({ [target.name]: target.value });

		console.log("handling change");
	};

	handleSubmit = e => {
		e.preventDefault();

		fetch("http://localhost:5010/test", {
			method: "GET",
			mode: "cors"
		})
			.then(res => res.json())
			.then(res => console.log(res));
		console.log("handling submit");
	};

	dbRegister = e => {
		fetch("http://localhost:5010/test", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(this.state)
		})
			.then(res => res.json())
			.then(res => console.log(res));
		console.log("handling registration");
	};
	callNode = e => {
		fetch("http://localhost:4010/nodeapi/test", {
			method: "get",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(res => console.log(res));
		console.log("calling nodejs");
	};

	render() {
		return (
			<div className="login">
				<form onSubmit={this.handleSubmit} onChange={this.handleChange}>
					<input
						name="username"
						type="text"
						className="form-control"
						id="inputUsername"
						placeholder="Enter username"
						value={this.state.username}
					/>
					<input
						name="password"
						type="password"
						className="form-control"
						id="inputPassword"
						placeholder="Enter password"
						value={this.state.password}
					/>
					<button type="submit" value="Submit" className="btn btn-primary">
						Login
					</button>
					<button
						type="button"
						onClick={this.dbRegister}
						className="btn btn-primary"
					>
						Register
					</button>
					<button
						type="button"
						onClick={this.callNode}
						className="btn btn-primary"
					>
						call nodejs server
					</button>
				</form>
			</div>
		);
	}
}

export default Login;
