//Import dependencies
import {useEffect, useState} from 'react';
import Signin from '../components/SignIn'
import Navigation from '../components/Navigation';
import Signup from '../components/Signup';
import Home from '../components/Home';
import Contact from "../components/ContactForm";
import Scheduler from "../components/Scheduler";
import Doctors from '../components/Doctors';
import Article from '../components/Article';
import Greeting from '../components/Greeting';
import Appointment from '../components/Appointment';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../components/NotFound'
import './main.css';
import {useHistory} from 'react-router-dom';
import config from '../config'

//Import Redux components
import {Provider} from "react-redux";
import store from "../store";

//Import Chart components
import Vasst from "../components/vasst/Vasst";

//Import actiom
import {createSession} from "../actions/assistant"

//Import axios
import axios from "axios";
import UpdateInformation from '../components/UpdateInformation';
import Review from '../components/Review';
import ForgotPassword from '../components/ForgotPassword';
import ResetPassword from '../components/ResetPassword';

if(localStorage.session){
  delete axios.defaults.headers.common["session_id"];
  axios.defaults.headers.common["session_id"] = localStorage.session;
}else{
  delete axios.defaults.headers.common["session_id"];
}

function App() {

  //States  
  const [displayNav, setdisplayNav] = useState(true);
  const [loggedState, setloggedState] = useState(false);


  if(!localStorage.session && loggedState){
    store.dispatch(createSession());
  }else{
    // if(localStorage.session && !loggedState){
    //   delete axios.defaults.headers.common["session_id"];
    //   localStorage.clear();
    // }
  }

  //useEffect
  useEffect(() => {
    document.title="One Health System"
   if(localStorage.token){
     setloggedState(true);
   }
  });


  console.log("Logged State :",loggedState, "Display Nav ",displayNav)
  return (
     <Provider store={ store }>
       <div className='tc'>
          <Navigation setdisplayNav={setdisplayNav} loggedState={loggedState} displayNav={displayNav} setloggedState={setloggedState}/>
       </div>

       <Switch>
          <Route  path="/home" exact render={(props) => <Home loggedState={loggedState} {...props} />} />
          <Route  path="/signin" render={(props) => <Signin setloggedState = {setloggedState} setdisplayNav={setdisplayNav} {...props}/>} />
          <Route  path="/doctors" render={(props) => <Doctors loggedState={ loggedState} {...props}/>}/>
          <Route  path="/virtualAssistant" component = {Vasst}/>
          <Route  path="/contact" component ={Contact} />
          <Route  path="/signup" component= {Signup}/>
          <Route  path="/scheduler" render={(props) => <Scheduler loggedState={ loggedState} {...props}/> } />
          <Route  path="/articles" component= {Article}/>
          <Route  path="/appointments" component={Appointment} />
          <Route  path="/greeting" component={Greeting} />
          <Route  path="/review" component={Review} />
          <Route  path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/reset/:token" component={ResetPassword} />
          <Route  path="/account" render={(props) => <UpdateInformation loggedState={ loggedState} /> }   />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
       </Switch>
       <div className="bg-black-80  pa4">
            <h2 className="fw1 tc white-90">One Health System </h2>
            <p className="fw1 tc white-90">Copyright © 2021, One Health System. All rights reserved.</p>
        </div>
     </Provider>
  
   );
//  }
}

export default App;
