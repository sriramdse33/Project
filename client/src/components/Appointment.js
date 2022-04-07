function Appointment(params) {
    


    return (

        <div>
{/* <!------ Include the above in your HEAD tag ----------> */}

 <div className="container pa5">
            <div className="row">
                <div className="col-md-6">
                    <div className="well-block">
                        <div className="well-title">
                            <h2>Questions? Book an Appointment</h2>
                        </div>
                        <form>
                            {/* <!-- Form start --> */}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" for="name">Name</label>
                                        <input id="name" name="name" type="text" placeholder="Name" className="form-control input-md"/>
                                    </div>
                                </div>
                                {/* <!-- Text input--> */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" for="email">Email</label>
                                        <input id="email" name="email" type="text" placeholder="E-Mail" className="form-control input-md"/>
                                    </div>
                                </div>
                                {/* <!-- Text input--> */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" for="date">Preferred Date</label>
                                        <input id="date" name="date" type="text" placeholder="Preferred Date" className="form-control input-md"/>
                                    </div>
                                </div>
                                {/* <!-- Select Basic --> */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" for="time">Preferred Time</label>
                                        <select id="time" name="time" className="form-control">
                                            <option value="8:00 to 9:00">8:00 to 9:00</option>
                                            <option value="9:00 to 10:00">9:00 to 10:00</option>
                                            <option value="10:00 to 1:00">10:00 to 1:00</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <!-- Select Basic --> */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="control-label" for="appointmentfor">Appointment For</label>
                                        <select id="appointmentfor" name="appointmentfor" className="form-control">
                                            <option value="Service#1">Service#1</option>
                                            <option value="Service#2">Service#2</option>
                                            <option value="Service#3">Service#3</option>
                                            <option value="Service#4">Service#4</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <!-- Button --> */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button id="singlebutton" name="singlebutton" className="btn btn-primary btn-sm btn-block">Make An Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* <!-- form end --> */}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="well-block">
                        <div className="well-title">
                            <h2>Why Appointment with Us</h2>
                        </div>
                        <div className="feature-block">
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">24/7 Hours Available</h4>
                                <div className="feature-content">
                                    <p>Integer nec nisi sed mi hendrerit mattis. Vestibulum mi nunc, ultricies quis vehicula et, iaculis in magnestibulum.</p>
                                </div>
                            </div>
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Experienced Staff Available</h4>
                                <div className="feature-content">
                                    <p>Aliquam sit amet mi eu libero fermentum bibendum pulvinar a turpis. Vestibulum quis feugiat risus. </p>
                                </div>
                            </div>
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Low Price & Fees</h4>
                                <div className="feature-content">
                                    <p>Praesent eu sollicitudin nunc. Cras malesuada vel nisi consequat pretium. Integer auctor elementum nulla suscipit in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
        
    );
}


export default Appointment;