const express = require('express');
const app = express();
const rout = require('./Router/index');
const cors = require('cors')
const connection = require('./server');
require('dotenv').config({path:'./dotenv/.env'});
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// app.get('/', (req, res) => {
//     res.send('lallalalalaalalalalal')
// })
connection();
app.use('/', rout)



app.listen(process.env.PORT, ()=>{
    console.log('running on ', process.env.PORT);
})