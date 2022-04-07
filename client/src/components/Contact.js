import React from 'react';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';

function Contact(props){
  console.log("Logged state in contact ",props.loggedState)
  return (
    <div className="col-sm-4 mh-25">
      <div className="box-info text-center user-profile-2">
        <div className="header-cover">
          <img src="https://picsum.photos/640/480" alt="User cover"/>
        </div>
        <div className="user-profile-inner">
          <br></br>
          <img src={`https://avatars.dicebear.com/api/avataaars/:${props.id}.svg`} className="rounded-circle profile-avatar" alt="User avatar"/>
          <h5>Dr. {props.name}</h5>
          <p>{props.profession}</p>
          <p>United States</p>
          <div className="user-button">
            <div className="row">
              <div className="col-md">
                {
                  props.loggedState == true?
                  <Link 
                    to={    {pathname: "/scheduler", 
                            aboutProps: {name: `${props.name}`, 
                            availability: `${props.availability}` , 
                            timings:{'start': `${props.startTime}`,
                            'end': `${props.endTime}`},
                            did: `${props.did}`
                          }}}
                    type="button" 
                    className="btn btn-primary btn-sm btn-block">
                    <i className="fa fa-envelope">
                    </i> Book Appointment
                  </Link>
                  :
                  <div></div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 
}

export default Contact;
