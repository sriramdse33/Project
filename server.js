
// IBM Assistant 
// 1. Import dependencies
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require("dotenv").config();
const cors = require('cors')

// 1.1 Allow parsing on request bodies
app.use(express.json());
app.use(bodyParser.json());




// 1.2 Connect to DB
mongoose.connect('mongodb+srv://ohsfront:1234@cluster0.monqq.mongodb.net/test', function(err) {
  if (err) {
      console.err(err);
  } else {
      console.log('Connected');
  }    
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Database"));


// 2. Import routes for api
const watsonRoutes = require("./routes/api/watson");

// // 2.1 Direct requests to /api/watson to Watson Routes
app.use("/api/watson", watsonRoutes);
app.use(cors());

//3.1. Import routes for doctors api
const doctorRoutes = require("./routes/api/doctors");

app.use("/api/doctors", doctorRoutes);


//3.2 Import routes for users api
const userRoutes = require("./routes/api/users");

app.use("/api/users", userRoutes);


//3.3 Import routes for reviews api
const reviewRoutes = require("./routes/api/reviews");

app.use("/api/reviews", reviewRoutes);


//3.4 Login Requets
const loginRoutes = require("./routes/api/login");
app.use("/api/login", loginRoutes);

//3.5 Register Requets
const registerRoutes = require("./routes/api/register");
app.use("/api/register", registerRoutes);


//3.6 Appointment Requets
const appointmentRoutes = require("./routes/api/appointments");
app.use("/api/appointments", appointmentRoutes);


//3.7 ForgotPassword Requests
const fp = require("./routes/api/forgotPassword");
app.use("/api/forgotPassword", fp);

//3.7 resetPassword Requests
const rp = require("./routes/api/resetPassword");
app.use("/api/resetPassword", rp);

//3.7 updatePasswordViaEmail Requests
const up = require("./routes/api/updatePasswordViaEmail");
app.use("/api/updatePasswordViaEmail", up);




// 3. Start server
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log("Server listening on port ", port);
});







module.exports = server
