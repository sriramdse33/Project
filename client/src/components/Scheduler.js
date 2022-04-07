import FullCalendar, {formatDate} from '@fullcalendar/react'
import { useEffect, useState } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import config from '../config'

function Scheduler(props, loggedState) {


    const [prop, setProp] = useState({props});
    const [currentEvents, setCurrentEvents] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");


    async function getAppointments(){
      return fetch(`${config.baseUrl}/appointments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": localStorage.getItem('token')
        },
      }).then((res) => {
        return res.json(); 
    })
    }


    const loadAppointments = async () => {
      const appointments = await getAppointments();
      console.log("User :", appointments);
      setCurrentEvents(appointments);
    }


    useEffect(() => {
      if(loggedState)
        loadAppointments();
    }, [])



    // const dates = { 'a': {'start': 6, 'end': 10}, 'b':{'start': 16, 'end': 21}}
    console.log(prop);
    if(prop.props.location.hasOwnProperty("aboutProps") && prop.props.location.aboutProps.hasOwnProperty("name")){
      console.log(props.location.aboutProps.name)
    }else{
      console.log("Error");
    }

    const handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
        console.log(arg.dateStr);
      }

      const renderSidebarEvent = (event) => {
        return (
          <li key={event._id}>
            <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
            <i>{event.title}</i>
          </li>
        )
      }

      const AMPM = (time) => {
        if(time < 12){
          return "AM"
        }else{
          return "PM"
        }
      }

      const renderSidebar = () => {
        return (
          <div className="">
           
          <div className='scheduler-sidebar vh-100'>
            <div className='scheduler-sidebar-section'>
              {props.location.hasOwnProperty("aboutProps") && props.location.aboutProps.hasOwnProperty("name")?
              <div>
                <h2>Schedule an Appointment</h2>
                <p>Doctor Name: Dr. {props.location.aboutProps.name}</p>
                <p>Days Available: {props.location.aboutProps.availability}</p>
                <p>Timings:  { (props.location.aboutProps.timings.start>12? props.location.aboutProps.timings.start-12 : props.location.aboutProps.timings.start) +" "+ AMPM(props.location.aboutProps.timings.start ) } to {props.location.aboutProps.timings.end-12+" "+ AMPM(props.location.aboutProps.timings.end ) }</p>
              </div>
              :<div> <h2>Instruction</h2></div>}
              <ul>
                <li>Select dates and you will be prompted to create a new event</li>
                <li>Drag, drop, and resize events</li>
                <li>Click an event to delete it</li>
              </ul>
            </div>
            <div className='scheduler-sidebar-section'>
              <h2>All Events ({currentEvents.length})</h2>
              <ul>
                {currentEvents.map(renderSidebarEvent)}
              </ul>
            </div>
            {/* Back to results  */}
            <Link className="pa3" to="/doctors">Go back to results</Link>
          </div>
            {/* { console.log(prop.props.history.goBack())  } */}
            
          </div>



          
        )
      }

      let eventGuid = 0;
      const createEventId = () => {
        return String(eventGuid++)
      }

      const dayMapping = (day) =>{
        const days = {'sunday': 0, 'monday': 1, 'tuesday': 2, 'wednesday':3, 'thursday':4, 'friday':5, 'saturday':6};
        if(day.toLowerCase() in days){
          return days[day.toLowerCase()];
        }
      }


      const handleDateSelect = (selectInfo) => {
        console.log(selectInfo)
        handleModal();
        // let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
        
        calendarApi.unselect() // clear date selection
        let title = "Appointment with Dr. " + props.location.aboutProps.name  + " is fixed";
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
        }
      }


      const handleEventClick = (clickInfo) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
          console.log("True")
          clickInfo.event.remove();
          setMobile("");
          setEmail("");
        }
      }

      async function postEvent ( event ){
        return fetch(`${config.baseUrl}/appointments`, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          "token": localStorage.getItem('token')
          },
          body: JSON.stringify(event)
        })
          .then(data => data.json())
         }



      const addEvent = async (events, did) => {
        for(const evt of events){
          console.log("Event: " ,evt);
          const reply = await postEvent({d_id: did, start: evt.start, title: evt.title, end: evt.end });
          if(reply.hasOwnProperty('error')){
            console.log("Error :", reply.error);
          }else{
            console.log("Error :", reply.message);
          }
        }

      }

      const handleEvents = (events) => {
        let did = 0;
        if (props.location.hasOwnProperty("aboutProps") && props.location.aboutProps.hasOwnProperty("did")){
          did = props.location.aboutProps.did;
        }
        if(did != 0)
        {addEvent(events, did);}
        setCurrentEvents(events);
      }

      const checkAllow = (selectInfo) => {  
        var st = selectInfo.start;
        var startDate = new Date(selectInfo.startStr);
        var sday = startDate.getDay();
        var sminutes = startDate.getMinutes();
        var shours = startDate.getHours();
        var endDate = new Date(selectInfo.endStr);
        var eminutes = endDate.getMinutes();
        var ehours = endDate.getHours();
        let availDays = prop.props.location.aboutProps.availability.split(',');
        availDays.forEach((day) => {
          if(dayMapping(day) != sday){
            return false;
          }
        });
        console.log(availDays);
        if(shours >= prop.props.location.aboutProps.timings.start && ehours<= prop.props.location.aboutProps.timings.end
           && currentEvents.length <= 0 && ehours-shours<=1){
          return true
        }else
        return false;
      }

      const handleModal = () =>{
        setModalShow(!modalShow);
      }

      const handleSubmit = () => {
        if(!mobile){
          window.alert("Please enter required details before submission!!");
        }else{
          handleModal();
          console.log(mobile, email);
        }
      }

      const onChangeMobile = (event) => {
        setMobile(event.target.value)
      }

      const onChangeEmail = (event) => {
        setEmail(event.target.value)
      }
      
    return (
      <div className="w-100 h-100">
    <div className='scheduler'>
            {renderSidebar()}
        <div className="scheduler-main">         
            <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
                left: 'prev,next today',
                right: 'title'
              }}
            initialView='timeGridWeek'
            disableDragging={true}
            selectable={true}
            selectAllow = {checkAllow}
            selectable = {true}
            // editable= {true}
            dayMaxEvents={true}
            select = {handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={handleEvents}
            />

            <Modal show={modalShow}>
              <Modal.Header>
                Book Appointment
              </Modal.Header>
              <Modal.Body>
                <Form noValidate validated={true} >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email"  onChange={(onChangeEmail.bind(this))} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control required type="mobile" placeholder="Mobile Number" onChange={onChangeMobile.bind(this)}/>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={()=>{handleSubmit()}}> Continue </Button>
              </Modal.Footer>
            </Modal>
            


        </div>


    </div>
    </div>
    )
}


export default Scheduler;