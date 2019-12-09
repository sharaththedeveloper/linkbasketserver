const express = require('express')
const app = express()
const mongoose = require("mongoose");
const cors = require('cors');
var morgan = require('morgan');
const helmet = require('helmet')
const port = 3000
require('dotenv').config()
app.use(helmet())
app.use(cors())
app.use(express.json());
app.use(morgan('combined'))

const signup = require("./Routes/signup");
const signin = require("./Routes/signin");
const addbookmark = require("./Routes/addbookmark");
const getallbookmarks =  require("./Routes/getallbookmarks");

const dburi = process.env.DB_URI
mongoose.connect(dburi,{ useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected");
});
app.get('/', (req, res) => res.send('Hello World!'))
app.use("/signin",signin);
app.use("/signup",signup);
app.use("/addbookmark",addbookmark);
app.use("/getallbookmarks",getallbookmarks);
app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message

        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))