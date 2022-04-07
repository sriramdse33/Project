import {useEffect, useState} from 'react';
import config from '../config';

function UpdateInformation({  loggedState } ) {

    const [email, setEmail] =  useState("");
    const [id, setId]  = useState();
    const [mobile, setMobile] =  useState("");
    const [addr, setAddr] =  useState("");
    const [password, setPassword] =  useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [message, setMessage] =  useState({});

    async function getUser(){
      return fetch(`${config.baseUrl}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": localStorage.getItem('token')
        },
      }).then((res) => {
        return res.json(); 
    })
    }

    const setUser = (user) => {
      setEmail(user.email);
      setMobile(user.mobile)
      setAddr(user.address)
      setPassword(user.password)
      setState("TX");
      setCity("San Marcos");
      setZip("78666");
      setId(user._id);
    }


    const loadUser = async () => {
      const user = await getUser();
      console.log("User :", user);
      setUser(user);
    }


    async function patchUser ( userDetails ){
      return fetch(`${config.baseUrl}/users/${id}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      })
        .then(data => data.json())
       }


    const updateUser = async (e) => {
      e.preventDefault();
      const reply = await patchUser({
        email, password, mobile, "address": addr
      })
      if(reply.hasOwnProperty('error')){
        setMessage({msg: reply.error , type: 'alert-danger'});
      }else{
        setMessage({msg: reply.message , type: 'alert-success'});
      }
    }

    useEffect(() => {
      if(loggedState)
        loadUser();
     },[]);
    

    return (
        <form className="container contact-form vh-100 dt w-100 pa5">
          {
            message?
            <div class= {`alert ${message.type} tc`} role="alert">
              {message.msg}
            </div>
            :<div></div>
          }
         <legend className="f2 fw7 ph0 mh0">My Account </legend>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={email} readOnly />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
          </div>
        </div>
        <div className="form-group">
          <label for="inputMobile">Mobile</label>
          <input type="text" className="form-control" id="inputMobile" placeholder="" value={mobile} onChange={ (e) => setMobile(e.target.value) }/>
        </div>
        <div className="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={addr} onChange={ (e) => setAddr(e.target.value) }/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" value={city} onChange={ (e) => setCity(e.target.value) }/>
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">State</label>
            <input type="text" className="form-control" id="inputCity" value={state} onChange={ (e) => setState(e.target.value) }/>
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" value={zip} onChange={ (e) => setZip(e.target.value) } />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick = { (e) => updateUser(e) }>Update</button>
      </form>
    );
}



export default UpdateInformation;