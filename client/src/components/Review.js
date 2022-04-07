import {Link} from 'react-router-dom';
import {useState} from 'react'
import config from '../config'

import Greeting from './Greeting'


function Review({loggedState}) {
    const [rating, setRating] = useState(parseInt(0) || 0);
    const [selection, setSelection] = useState(0);
    const [review, setReview] = useState("");
    const [message, setMessage] = useState("");


    async function postReview ( reviewDetails ){
        return fetch(`${config.baseUrl}/reviews/${localStorage['id']}`, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(reviewDetails)
        })
          .then(data => data.json())
         }
  
  
      const submitReview = async (e) => {
        e.preventDefault();
        if(review == '' || rating == 0){
            alert("Please leave a review before submitting!")
        }
        const reply = await postReview({
          "review": review, "user_id": localStorage['id'], "rating": rating
        })
        if(reply.hasOwnProperty('error')){
          setMessage({msg: reply.error , type: 'alert-danger'});
        }else{
          setMessage({msg: reply.message , type: 'alert-success'});
        }
      }

    const Star = ({ marked, starId }) => {
        return (
          <span data-star-id={starId} className="star" role="button">
            {marked ? '\u2605' : '\u2606'}
          </span>
        );
      };
      
      const StarRating = ({ value }) => {
    
        const hoverOver = event => {
          let val = 0;
          if (event && event.target && event.target.getAttribute('data-star-id'))
            val = event.target.getAttribute('data-star-id');
          setSelection(val);
        };
        return (
          <div
            className='w-70 h2'
            onMouseOut={() => hoverOver(null)}
            onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
            onMouseOver={hoverOver}
          >
            {Array.from({ length: 5 }, (v, i) => (
              <Star
                starId={i + 1}
                key={`star_${i + 1}`}
                marked={selection ? selection >= i + 1 : rating >= i + 1}
              />
            ))}
          </div>
        );
      };

      console.log(rating)

    return (
        <div>
        {
            message === '' ?
        <div class="contact-form vh-100 dt w-100 bg-lightest-blue pa5">
            <h3 className='tc'>Write a Review</h3>
            <div class="row pa5">
                    <div class="col-md-6">
                        <p className='h2'>Rating</p>
                        <StarRating />
                        <div class="form-group pa5">
                            <button type="submit" name="btnSubmit" onClick={(e)=>submitReview(e)} className="btn btn-primary btn-sm" > Submit </button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" onChange={(e) => setReview(e.target.value)} placeholder="Your Review *" style={{width: "100%" , height: "150px"}}></textarea>
                        </div>
                    </div>
                </div>
        </div>
:
<Greeting isReview = {true} />
        }
        </div>
    )
}


export default Review;