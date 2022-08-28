const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require('./app/models');
const app = express();

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Home' });
});

const customerroute = require('./app/routes/customer.route');
console.log(customerroute);

db.sequelize.sync()
.then(()=>{
    console.log('yes resync')
});
app.listen(3000,(req,res)=>{
    console.log('server running at port 3000');
});