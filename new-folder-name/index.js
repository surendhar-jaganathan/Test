const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
var nodemailer = require('nodemailer');
const app= express()
const PORT = process.env.PORT || 5001;
const uri = ""
const winston = require('winston');



const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.File({ 
      filename: 'logs.txt', 
      level: 'info', 
      format: winston.format.combine(
        winston.format.timestamp(), // Add timestamp to each log
        winston.format.simple() // Log in simple format
      )})
  ]
});





async function dbConnect() {
    // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
    mongoose
      .connect(
        uri,
        {
            dbName: 'user',
        }
      )
      .then(() => {
        console.log("Successfully connected to MongoDB Atlas!");
      })
      .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.error(error);
      });
  }
  
 // dbConnect();
  const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const Users = mongoose.model('details', UserSchema);
// User.createIndexes();


app.use(express.json());    
app.use(cors());






app.post('/log', (req, res) => {

  console.log(req)
  const { message } = req.body; // Get the message from the request body
  
  if (!message) {
    return res.status(400).send('Message is required');
  }


  logger.info(message); 

  res.send(`Message logged: ${message}`);
});




app.get("/", (req, resp) => {
 
    resp.send("App is Working");

});


app.get("/getcollection", (req, res) => {
 
    Users.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));

});

app.delete('/deleteuser/:id', (req, res) => {
    Users.findByIdAndDelete(req.params.id,res)
      .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a book' }));
  })



app.put("/:id", (req, res) => {
 
    Users.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});





app.post("/register", async (req, res) => {

     Users.create(req.body)
    .then(book => res.json({ msg: 'Book added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
})

app.post("/sendemail", async (req, res) => {


  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'j.surendhar11@gmail.com',
    }
  });

   console.log(req.body)
  transporter.sendMail(req.body, function(error, info){
    if (error) {
      res.status(400).json({ error: error.toString() })
      console.log(error);
    } else {
      res.json({ msg: 'email sent successfully' })
      console.log('Email sent: ' + info.response);
    }
  });




})






app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// mongoose.connect("mongodb://localhost/your_database_name")