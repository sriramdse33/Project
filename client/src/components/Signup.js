import {Link, Redirect} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {useState} from 'react'
import config from '../config'

function Signup(){

  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage ] = useState();
  const [firstName, setFirstname ] = useState("");
  const [lastName, setLastname ] = useState("");
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      first: firstName,
      last: lastName,
      address: "USA"
    }
    console.log("Data ", JSON.stringify(data));
    setMessage({
      data: "Registration is in progress...",
      type: "alert-warning",
    });
    fetch(`${config.baseUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then((res) => {
      res.json(); 
      if(res.status === 200){
        setMessage({
          data: "Registration Successful!",
          type: "alert-success",
        });
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        e.target.reset();
      }else if(res.status === 403){
        setMessage({
          data: "Email provided already exists!",
          type: "alert-danger",
        });
      }else{
        setMessage({
          data: "Error Registering user!",
          type: "alert-danger",
        });
      }
      console.log("Response :", res);
    })
  };

  return (
          <div className="vh-100 dt w-100 bg-lightest-blue">
            {
              message?
            <div class={`alert ${message.type} tc`} role="alert">
                {message.data}
              </div>:<div></div>
            }
            <article class="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow center bg-white">
            <main className="pa4 black-80">
            <div className="measure center">
            <form onSubmit={onSubmit} >
            <fieldset
              id="sign_up"
              className="ba b--transparent ph0 mh0"
            >
            <legend className="f2 fw7 ph0 mh0">
            Sign Up
            </legend>
            <p>Please fill in this form to create an account!</p>
            <div className="mt3">
            <label
              className="db fw6 lh-copy f6"
              htmlFor="email-address"
            >
            First Name
            </label>
            <input
              className="pa2 input-reset ba hover-bg-gray hover-white w-100"
              type="name"
              name="first-name"
              id="email-address"
              value = {firstName}
              onChange = {(e) => {setFirstname(e.target.value) }}
            />
            </div>
            <div className="mt3">
            <label
              className="db fw6 lh-copy f6"
              htmlFor="email-address"
            >
            Last Name
            </label>
            <input
              className="pa2 input-reset ba hover-bg-black hover-white w-100"
              type="name"
              name="last-name"
              id="email-address"
              value = {lastName}
              onChange = {(e) => {setLastname(e.target.value) }}
            />
            </div>
            <div className="mt3">
            <label
              className="db fw6 lh-copy f6"
              htmlFor="email-address"
            >
            E-mail
            </label>
            <input
              className="pa2 input-reset ba hover-bg-black hover-white w-100"
              type="email"
              name="email-address"
              id="email-address"
              value = {email}
              onChange = {(e) => {setEmail(e.target.value) }}
            />
            </div>
            <div className="mv3">
            <label
              className="db fw6 lh-copy f6"
              htmlFor="password"
            >
            Password
            </label>
            <input
              className="b pa2 input-reset ba hover-bg-black hover-white w-100"
              type="password"
              name="password"
              id="password"
              value = {password}
              onChange = {(e) => {setPassword(e.target.value) }}
            />
            </div>
            </fieldset>
            <div className="tc">
              <button
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit" to="/signin"
              > Register </button>
            </div>
            </form>

        </div>
        </main>
        </article>
        <div className="pb3 text-center">Already have an account? <Link to="/signin" href="#">Login here</Link></div>
        </div>
);
}

export default Signup;
