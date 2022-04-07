import {useState} from 'react';
import {Link, useLocation, useHistory} from 'react-router-dom'
function Signin({ setloggedState, setdisplayNav}){
	const [Username, setUsername] = useState("");
	const [Password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	// let location = useLocation();
	let history = useHistory();


	async function loginUser(credentials) {
		return fetch('http://localhost:5000/api/login', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(credentials)
		})
		  .then(data => data.json())
	   }


	 //Validate credentials
	 const validate = async (e) => {
		const reply = await loginUser({
			Username, Password
		})
		console.log("Reply ", reply)
		if(reply.hasOwnProperty('token')){
			setTimeout(() => {
				history.push("/home")
				setdisplayNav(true);
				setloggedState(true);
				localStorage.setItem("token", reply['token']);
				localStorage.setItem("id", reply["userid"]);
			  }, 100);
			
		}else{
			console.log("Invalid credentials ", reply.message);
			setMessage(reply.message);
		}
		
	  }


	return (
		<div className="vh-100 dt w-100 bg-lightest-blue">
		{
			message?
			<div class="alert alert-danger tc" role="alert">
				{message}
			</div>
			:<div></div>
		}
		<div class=" pa5 modal-dialog modal-login">
			<div class="modal-content">
				<div class="modal-header">
					<div class="avatar">
						<img src="https://www.materiell.com/wp-content/uploads/2015/04/deven-full1.png" alt="Avatar"/>
					</div>				
					<h4 class="modal-title">Member Login</h4>	
				</div>
				<div class="modal-body">
						<div class="form-group">
							<input type="text" class="form-control" name="username" placeholder="Username" onChange = {(e)=> setUsername(e.target.value)} required="required"/>		
						</div>
						<div class="form-group">
							<input type="password" class="form-control" name="password" placeholder="Password" onChange = {(e)=> setPassword(e.target.value)}  required="required"/>	
						</div>        
						<div class="form-group">
							{/* {renderRedirect()} */}
							<button  type="button" class="btn btn-primary btn-lg btn-block login-btn" onClick={validate}>Login</button>
						</div>
				</div>
				<div class="modal-footer flex flex-column">
			<div className="">
						Don't have an account?<Link to="/signup">Sign Up</Link>
					</div>
			<div className="">
					  <Link to="/forgotPassword">Forgot Password?</Link>
			</div>
				</div>
			</div>
		</div>
	
	
		</div>
	);
}


export default Signin;