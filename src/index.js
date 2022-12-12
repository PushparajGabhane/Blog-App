const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
//connect to DB
const URL = process.env.DATABASE_URL == undefined ? "mongodb://localhost/blogs" : process.env.DATABASE_URL;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(3000, () => console.log('Server running......'));

