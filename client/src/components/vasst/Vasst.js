import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Scroll from '../Scroll';

//Impot actions
import { userMessage, sendMessage }  from "../../actions/assistant";

const Vasst = ({ chat, userMessage, sendMessage }) =>{
//Handles user message
  const [message, setMessage] = useState("");
  const [clear, setClear] = useState(false);
  const endOfMessages = useRef(null);
  const historyContainer = useRef();


  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // scrollToBottom()
  }, [chat]);


  //Handle user's submission
  const handleClick = async(e) => {
    const code = e.keyCode || e.which;
    if(code === 13){
      console.log(message);
      userMessage(message);
      sendMessage(message);
      setMessage("");
    }

  }

  return(
    <div className="container contact-form vh-100 dt w-100 pa5">
      <div className="tc">
        <h1> Virtual Assistant </h1>
        <p> Type in MENTAL/ DENTAL/ HEART to start </p>
        </div>
        <div className = "tc  ba bw1" style={{overflow: 'scroll'}}>
        {/* <button onClick={(e)=>clearDivs()}>clear</button> */}
        <div id='hc' className="historyContainer" >
          {/* Handle Messages */}
          {chat.length ===0 ? "" : chat.map(msg =>{  return <div  className= {msg.type} > {msg.message} </div> }) }
          {/* <div ref={endOfMessages}></div> */}
          {/* Handle Messages */}
        </div>
          <input
            id="chatBox"
            className="chatBox"
            onChange = {(e)=> setMessage(e.target.value)}
            onKeyPress={handleClick}
            placeholder="Please type in symptoms and press enter"
            value={message}></input>
            
      </div>
    </div>
  );
};

// Map current redux state to Chat component as props
const mapStateToProps = (state) =>({
  //Allows us to access message queues inside chat component
  chat: state.assistant.messages,
});

//Hook this up to redux -- Maps state to userMessage
export default connect( mapStateToProps, {userMessage, sendMessage})(Vasst);
