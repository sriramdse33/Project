import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import PropTypes from 'prop-types';
import LinkButtons from './LinkButtons';
import SubmitButtons from './SubmitButtons';
import {updateButton, loginButton} from './ButtonStyles';
import homeButton  from './ButtonStyles';
import forgotButton from './ButtonStyles';
import inputStyle from './ButtonStyles';
import HeaderBar from './HeaderBar';


const loading = {
    margin: '1em',
    fontSize: '24px',
  };
  
  const title = {
    pageTitle: 'Password Reset Screen',
  };
  
  export default class ResetPassword extends Component {
    constructor() {
      super();
  
      this.state = {
        username: '',
        password: '',
        updated: false,
        isLoading: true,
        error: false,
      };
    }
  
    async componentDidMount() {
      const {
        match: {
          params: { token },
        },
      } = this.props;
      try {
        const response = await axios.get(`http://localhost:5000/api/resetPassword/${token}`);
        // console.log(response);
        if (response.data.message === 'password reset link a-ok') {
          console.log("Response from reset ",response.data)
          this.setState({
            username: response.data.username,
            updated: false,
            isLoading: false,
            error: false,
          });
        }
      } catch (error) {
        console.log(error.response.data);
        this.setState({
          updated: false,
          isLoading: false,
          error: true,
        });
      }
    }
  
    handleChange = name => (event) => {
      this.setState({
        [name]: event.target.value,
      });
    };
  
    updatePassword = async (e) => {
      e.preventDefault();
      const { username, password } = this.state;
      const {
        match: {
          params: { token },
        },
      } = this.props;
      try {
        const response = await axios.put(
          'http://localhost:5000/api/updatePasswordViaEmail',
          {
            username,
            password,
            resetPasswordToken: token,
          },
        );
        console.log(response.data);
        if (response.data.message === 'password updated') {
          this.setState({
            updated: true,
            error: false,
          });
        } else {
          this.setState({
            updated: false,
            error: true,
          });
        }
      } catch (error) {
        console.log(error.response.data);
      }
    };
  
    render() {
      const {
   password, error, isLoading, updated 
  } = this.state;
  
      if (error) {
        return (
          <div>
            <HeaderBar title={title} />
            <div style={loading}>
              <h4>Problem resetting password. Please send another reset link.</h4>
              <LinkButtons
                buttonText="Go Home"
                buttonStyle={homeButton}
                link="/"
              />
              <LinkButtons
                buttonStyle={forgotButton}
                buttonText="Forgot Password?"
                link="/forgotPassword"
              />
            </div>
          </div>
        );
      }
      if (isLoading) {
        return (
          <div>
            <HeaderBar title={title} />
            <div style={loading}>Loading User Data...</div>
          </div>
        );
      }
      return (
        <div className="container vh-100 dt w-100 pa5">
          <HeaderBar title={title} />
          <form className="password-form" onSubmit={this.updatePassword}>
            {/* <TextField
              style={inputStyle}
              id="password"
              label="password"
              onChange={this.handleChange('password')}
              value={password}
              type="password"
            /> */}
            <div className="form-group pa3">
              <input type="password" style={inputStyle}
              id="password"
              className="btn btn-primary btn-sm" value={password} 
              onChange={this.handleChange('password')} class="form-control" placeholder="Password"/>
            </div>
            <button
              className="btn btn-danger pa2"
              >Update Password</button>
          </form>
  
          {updated && (
            <div className="pa2">
              <p>
                Your password has been successfully reset, please try logging in
                again.
              </p>
              <LinkButtons
                buttonStyle={loginButton}
                buttonText="Login"
                link="/signin"
              />
            </div>
          )}
          <LinkButtons buttonText="Go Home" buttonStyle={homeButton} link="/" />
        </div>
      );
    }
  }
  
  ResetPassword.propTypes = {
    // eslint-disable-next-line react/require-default-props
    match: PropTypes.shape({
      params: PropTypes.shape({
        token: PropTypes.string.isRequired,
      }),
    }),
  };