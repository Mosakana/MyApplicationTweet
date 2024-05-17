import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;

    // 表单验证逻辑
    if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Code for handling sign-up form submission
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Log In</h3>
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} required />
        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} required />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
