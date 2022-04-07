import {Link} from 'react-router-dom';

function Contact() {

   return(
    <div class="container contact-form vh-100 dt w-100 pa5">
    <div class="contact-image pa1">
        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
    </div>
        <h3>Drop Us a Message</h3>
       <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" name="txtName" class="form-control" placeholder="Your Name" value="" />
                </div>
                <div class="form-group">
                    <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                </div>
                <div class="form-group">
                    <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                </div>
                <div class="form-group">
                    <Link to="/Greeting" type="submit" name="btnSubmit" className="btn btn-primary btn-sm" > Send Message </Link>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style={{width: "100%" , height: "150px"}}></textarea>
                </div>
            </div>
        </div>
</div>
   )
}

export default Contact;
