import {Link} from 'react-router-dom'

function Greeting({ isReview }){
    return (
      <div className= 'vh-100 dt w-100 bg-light-gray'>
    <div class="jumbotron text-center">
    <h1 class="display-3 pa6">Thank You!</h1>
    {
      !isReview?
    <p class="lead"><strong>We will reach out to you via Email</strong></p>
    : <p></p>
    }
    <p class="lead">
      <Link to="/" class="btn btn-primary btn-sm" href="https://bootstrapcreative.com/" role="button">Continue to homepage</Link>
    </p>
  </div>
  </div>
  )
}



export default Greeting;