//Import types
import {INPUT_SUCCESS, INPUT_FAIL, SESSION_FAIL, SESSION_SUCCESS, MESSAGE_FAIL, MESSAGE_SUCCESS} from "./types";

//import axios
import axios from "axios"

//Function handles user msg
export const userMessage = (message) => async(dispatch) =>{
  try{
    dispatch({type:INPUT_SUCCESS, payload: message})
  }catch(e){
    dispatch({type:INPUT_FAIL})
  }
};

//Creates a session - API call (Call to get session ID for assistant, which can be used to communicate with backend)
export const createSession = () => async(dispatch) => {
  console.log("Calling action creation session");
  try{
    const res  = await axios.get("/api/watson/session");
    dispatch({type: SESSION_SUCCESS, payload:res.data});
  }catch(e){
    dispatch({type: SESSION_FAIL,});
  }
}

//  Sends the message to the bot - API CALL
export const sendMessage = (message) => async (dispatch) => {
  try {
    const body = { input: message };
    const headers ={ 'session_id': localStorage.session};
    console.log(headers);
    const res = await axios.post("/api/watson/message", body, { headers: headers });
    console.log(res);
    dispatch({
      type: MESSAGE_SUCCESS,
      payload: res.data.output.generic[0].text

    });
  } catch (err) {
    dispatch({ type: MESSAGE_FAIL });
  }
};
