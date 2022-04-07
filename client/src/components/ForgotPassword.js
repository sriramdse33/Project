/* eslint-disable no-console */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import LinkButtons from './LinkButtons';
import SubmitButtons from './SubmitButtons';
import registerButton from './ButtonStyles';
import homeButton from './ButtonStyles';
import forgotButton from './ButtonStyles';
import inputStyle from './ButtonStyles';
import HeaderBar from './HeaderBar';

const title = {
  pageTitle: 'Forgot Password Screen',
};

class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false,
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (email === '') {
      this.setState({
        showError: false,
        messageFromServer: '',
        showNullError: true,
      });
    } else {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/forgotPassword',
          {
            email,
          },
        );
        console.log(response.data);
        if (response.data === 'recovery email sent') {
          this.setState({
            showError: false,
            messageFromServer: 'recovery email sent',
            showNullError: false,
          });
        }
      } catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'email not in db') {
          this.setState({
            showError: true,
            messageFromServer: '',
            showNullError: false,
          });
        }
      }
    }
  };

  render() {
    const {
 email, messageFromServer, showNullError, showError 
} = this.state;

    return (
      <div className="container vh-100 dt w-100 pa5">
        <HeaderBar title={title} />
        <br/>
        <form className="profile-form tc" onSubmit={this.sendEmail}>
        <div class="form-group">
              <input type="text" style={inputStyle}
            id="email"
            className="tc" value={email} 
            onChange={this.handleChange('email')} name="txtName" class="form-control" placeholder="Email Address"/>
         </div>
          {/* <TextField
            style={inputStyle}
            id="email"
            className='pa2'
            value={email}
            onChange={this.handleChange('email')}
            placeholder="Email Address"
          /> */}

          <button className="btn btn-primary btn-l"> Reset </button>
        </form>
        {showNullError && (
          <div>
            <p>The email address cannot be null.</p>
          </div>
        )}
        {showError && (
          <div>
            <p>
              That email address isn&apos;t recognized. Please try again or
              register for a new account.
            </p>
            <LinkButtons
              buttonText="Register"
              buttonStyle={registerButton}
              link="/signup"
            />
          </div>
        )}
        {messageFromServer === 'recovery email sent' && (
          <div>
            <h3>Password Reset Email Successfully Sent!</h3>
          </div>
        )}
        <LinkButtons buttonText="Go Home" buttonStyle={homeButton} link="/" />
      </div>
    );
  }
}

export default ForgotPassword;
