import ContactDirectory from '../components/ContactDirectory';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {useEffect, useState} from 'react';


function Doctors( { loggedState } ) {

    const [avatars, setAvatars] = useState([]);
    const [searchField, setSearchField] = useState("");

    let filteredNames = [];
    

    console.log(avatars)
    for(let i=0; i < avatars.length; i++){
        // console.log(avatars[i])
        if(avatars[i].profession.toLowerCase().includes(searchField.toLowerCase())){
            filteredNames.push(avatars[i]);
        }
    }

    //Event function
    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    useEffect(() => {
        // console.log("useEffect called....", avatars);
        fetch("http://localhost:5000/api/doctors/")
        .then(response => response.json())
        .then(doctors => setAvatars(doctors));
        // setAvatars(avatars)
    }, []);

    return (
        <div className = "tc vh-100 dt w-100 mb5">
            {/* <SearchBox searchChange = {onSearchChange}/> */}
            <div class="row">
                <div class="col-lg-12 card-margin">
                    <div class="card search-form">
                        <div class="card-body p-0">
                            {/* <form id="search-form"> */}
                                <div class="row">
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                                <select class="form-control" id="exampleFormControlSelect1" onChange={onSearchChange}>
                                                   
                                                   {
                                                       avatars.map(avatar => {
                                                           return <option> {avatar.profession}</option>
                                                       })
                                                   }
                                                    {/* <option>Dentist</option>
                                                    <option>Nutrionist</option>
                                                    <option>Cardiologist</option>
                                                    <option>Neurologist</option>
                                                    <option>Physician</option> */}
                                                </select>
                                            </div>
                                            <div class="col-lg-8 col-md-6 col-sm-12 p-0">
                                                <input type="text" placeholder="Search..." value={searchField} class="form-control" id="search" name="search" onChange={onSearchChange}/>
                                            </div>
                                            <div class="col-lg-1 col-md-3 col-sm-12 p-0">
                                                <button  class="btn btn-base">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='container bootstrap snippets bootdey'>
                <Scroll>
                    <ContactDirectory avatars={filteredNames} loggedState={loggedState} />
                </Scroll>
            </div>
            {/*  Experimental */}

{/* 
            <div class="card shadow-3 br3" style={{maxwidth: "500px;"}}>
        <div class="row no-gutters">
            <div class="col-sm-5" style={{background: "#868e96;"}}>
                <img src="/examples/images/sample.svg" class="card-img-top h-100" alt="..."/>
            </div>
            <div class="col-sm-7">
                <div class="card-body">
                    <h5 class="card-title">Alice Liddel</h5>
                    <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                    <a href="#" class="btn btn-primary stretched-link">View Profile</a>
                </div>
            </div>
        </div>
    </div> */}




        </div>



        


    );
}



export default Doctors;