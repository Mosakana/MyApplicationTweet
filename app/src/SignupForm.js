/*import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      showError: false,
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    // 检查表单信息是否合法
    if (this.state.email === '' || this.state.password === '') {
      this.setState({ showError: true }); // 显示弹窗
    } else {
            const { name, value } = event.target;
            this.setState({ [name]: value });
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Sign Up</h4>
        <label htmlFor="name"><b>Name</b></label>
        <input type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange} required />
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} required />
        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} required />
        <button type="submit">Sign Up</button>
        {this.state.showError && <div className="error-popup">请输入正确的邮箱和密码</div>}
      </form>
    );
  }
}

class ErrorPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true, // 添加一个状态来控制是否显示弹窗
    };
  }

  handleClose = () => {
    this.setState({ show: false }); // 关闭弹窗
  }

  render() {
    return (
      <div className="error-popup" style={{ display: this.state.show ? 'block' : 'none' }}>
        <div className="message">{this.props.message}</div>
        <button className="close-btn" onClick={this.handleClose}>关闭</button>
      </div>
    );
  }
}


export default SignupForm
*/

import React from 'react';
import './LoginForm.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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

    // Check if name is not empty
    if (!this.state.name) {
      alert('Please enter your name.');
      return;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.state.email)) {
      alert('Please enter a valid email.');
      return;
    }

    // Check if password is at least 8 characters long
    if (this.state.password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    // Code for handling sign-up form submission
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Sign Up</h4>
        <label htmlFor="name"><b>Name</b></label>
        <input type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange} required />
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} required />
        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default SignupForm;
