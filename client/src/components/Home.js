import Carousel from 'react-bootstrap/Carousel'
import {useEffect, useState} from 'react'
import { Link, useHistory} from 'react-router-dom';
import config from '../config'

function Home( { loggedState } ) {
    let history = useHistory({});

    const [reviews, setReviews] = useState([])


    const checkLoggedState = () => {
        if(loggedState){
            history.push("/virtualAssistant")
        }else{
            history.push("/signin")
        }
    }

    async function getReviews(){
        return fetch(`${config.baseUrl}/reviews`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          return res.json(); 
      })
      }

      const loadReviews = async () => {
        const reviews = await getReviews();
        console.log("reviews :", reviews);
        setReviews(reviews);
      }


      

      useEffect(() => {
        loadReviews();
      }, [])


return (
    
<header className="sans-serif">
    <div
    className="cover bg-left bg-center-l"
    style={{backgroundImage: "url(https://emerj.com/wp-content/uploads/2018/10/ai-for-virtual-medical-assistants-4-current-applications-2.jpg)"}}
    >
        <div className="bg-black-80 pb5 pb6-m pb7-l">
            <div className="tc-l mt5-m ph3">
                <h1 className="f3 f1-l pa5 fw2 white-90 mb0 lh-title">
                Welcome to One Health System!
                </h1>
                <h2 className="fw1 f3 white-80 mt3 mb4">
                Get everything taken care of with our Virtual Assistant
                </h2>
                <button to="virtualAssistant" onClick = {() => checkLoggedState()} className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3">
                Virtual Assistant
                </button>
            </div>
        </div>
    </div>
    

    {/* Cardsss */}
    {/* <div className="row row-cols-1 row-cols-md-4 g-4 pa5">
        <div className="col">
            <div className="card h-100">
            <img src="https://ca-times.brightspotcdn.com/dims4/default/ae6c31a/2147483647/strip/true/crop/2048x1413+0+0/resize/840x580!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb1%2F8c%2F31c2c9db81c475a39018fae24c0f%2Fla-1543947916-p4eu2k4wd4-snap-image" className="card-img-top"  height="173" alt="dentist"/>
            <div className="card-body">
                <h5 className="card-title">Dentist</h5>
                <p className="card-text fw1">Teething troubles? Schedule a dental checkup</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="https://www.centurymedicaldental.com/wp-content/uploads/2018/05/specialty-neurology.jpg" className="card-img-top" height="173" alt="Neurologist"/>
            <div className="card-body">
                <h5 className="card-title">Neurologist</h5>
                <p className="card-text fw1">Have migraine headaches? you should probably make an appointment with a neurologist</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="http://www.gaba.org.nz/wp-content/uploads/2018/09/app1-2.jpg" className="card-img-top" height="173" alt="Dietician"/>
            <div className="card-body">
                <h5 className="card-title">Dietician/Nutrition</h5>
                <p className="card-text fw1">Get gudiance on eating right, weight management and sports nutrition</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="https://www.amnhealthcare.com/uploadedImages/MainSite/Content/Staffing_Recruitment/stock%20photo_1.jpg" className="card-img-top" height="173" alt="Physician"/>
            <div className="card-body">
                <h5 className="card-title">General Physician</h5>
                <p className="card-text fw1">Find the right family doctor in your neighborhood</p>
            </div>
            </div>
        </div>
    </div> */}
    {/* Articles from health experts */}
    <div className="container-xxl pa4">
        <div className="row pl6 pr3">
            <div className="col-sm-6 pa6">
                <h2>Read top articles from health experts</h2>
                <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
                <Link to="articles" className="btn btn-primary btn-lg">See all articles</Link>
            </div>
            <div className="col-sm-6">
                <div className="row ma3">
                    <div className="col-6 col-sm-6">
                        <Link to={{pathname:"https://www.pacificmedicalcenters.org/physician-articles/a-sniffle-a-sneeze-dimple-sahay"}} target="_blank" className="dim black" style={{textDecoration: 'none', color: 'inherit'}} >
                        <div className="card h-100">
                            <img src="https://www.pacificmedicalcenters.org/wp-content/uploads/2020/06/flu_and_cold_season-300x200.jpg" className="card-img-top" height="173" alt="Physician"/>
                            <div className="card-body">
                                <h5 className="card-title">A sniffle, a sneeze</h5>
                                <p className="card-text fw1">PacMed doctor explains the differences between the common cold and flu virus</p>
                                <p className="fw1">Dimple Sahay, MD</p>
                                
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-6 col-sm-6">
                    <Link to={{pathname:"https://www.seattletimes.com/life/wellness/controlling-allergies-in-spring-and-early-summer/#:~:text=Avoid%20using%20fans%20that%20blow,pull%20in%20pollen%20from%20outside.&text=When%20driving%2C%20use%20your%20air,to%20filter%20larger%20sized%20allergens.&text=Use%20a%20dehumidifier%20to%20decrease%20mold%20growth%20in%20your%20home.&text=Shower%20frequently%20to%20remove%20pollen%20from%20your%20skin%20and%20hair."}} target="_blank" className="dim black" style={{textDecoration: 'none', color: 'inherit'}} >
                        <div className="card h-100">
                            <img src="https://static.seattletimes.com/wp-content/uploads/2015/05/6ab2a202-f82d-11e4-82f6-7e9d5b28ed541-2040x2308.jpg" className="card-img-top" height="173" alt="Physician"/>
                            <div className="card-body">
                                <h5 className="card-title">Controlling Allergies in Spring and Early Summer</h5>
                                <p className="card-text fw1">Springtime brings sunshine, green grass, chirping birds, blooming bulbs and if...</p>
                                <p className="fw1">Alexander M. Hamling, MD, MBA, FAAP </p>
                            </div>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>


    {/* Doctor and Vasst setup */}
    <div className="row pa5 pl2 bg-black-80">
        <div className="col-sm-6 ">
            <div className="dt mw6 center pv5-m shadow-3 br3 bg-lightest-blue">
                <div className="dtc v-mid br3">
                    <img src="https://www.optimahealth.com/_assets/images/group-of-doctors-card.jpg" alt="A bright blue sky" className="mw5"  height="174"/>
                </div>
                <div className="dtc v-mid pl3">
                    <h2 className="f4 lh-copy"> Find doctors near you</h2>
                    <p className="f7 lh-copy">
                    Select preferred doctor and time slot to book an in-person consultation
                    </p>
                    <Link to="/doctors" className="btn btn-primary btn-sm">Find Doctors Now</Link>
                </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="dt h-6 mw6 center pv5-m shadow-3 br3 bg-lightest-blue">
                <div className="dtc">
                    <img src="http://cdn.shopify.com/s/files/1/1810/5253/articles/virtual_assistants_wegacha.jpg?v=1523285142" alt="A bright blue sky" class="mw5" height="174"/>
                </div>
                <div className="dtc v-mid pl3 ma3">
                    <h2 className="f4 lh-copy ma2"> Chat with our AI Expert </h2>
                    <p className="f7 lh-copy ma2">
                        Give it symptoms, It will predict your disease
                    </p>
                    <Link to='/virtualAssistant' className="ma2 btn btn-primary btn-sm">Start Session</Link>
                </div>
            </div>
        </div>
    </div>

    
    {/* REVIEWS */}
        {/* <ControlledCarousel /> */}
        <div className="pa6 bg-gray">
            <h2 className="tc fw4 white-80">What our users have to say</h2>
            <Carousel className="pa2 bg-gray"> 
            {
                reviews.length>0? reviews.map(review => {  
                    return( 
                    <Carousel.Item className="pa5 bg-gray">
                    <Carousel.Caption className="pa1">
                    <h3 className="white-80 fw2">{ review.review }</h3>
                    <p className="white-80"> {review.user_id} </p>
                    {/* <p className="black-80">Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>);
                }) : ""
            }
            </Carousel>
              {/* /*  <Carousel.Item className="pa5 bg-white">
                    <Carousel.Caption className="pa1">
                    <h3 className="black-80 fw2">Really very great application</h3>
                    <p className="black-80">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  className="pa5 bg-white">
                    <Carousel.Caption className="pa1">
                    <h3 className="black-80 fw2">WOW, Wonderfulll!</h3>
                    <p className="black-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  className="pa5 bg-white">
                    <Carousel.Caption className="pa1">
                    <h3 className="black-80 fw2">I get to learn a lot from this website!</h3>
                    <p className="black-80">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */ }
            
        </div>

        
</header>
);

}



export default Home;