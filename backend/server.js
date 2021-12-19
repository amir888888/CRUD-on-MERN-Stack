const mongoose  = require("mongoose");
require('dotenv').config({path:'./dotenv/.env'})
const connection = () => mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true})
.then(() => console.log('mongo nconnect succsssessfully'))
.catch(err => console.log(err));

module.exports = connection;