module.exports=(app)=>{
    router = require('express').Router();
    const customer = require('../controllers/customer.controller');

    //create new customer
     router.post('/',customer.list);
    // router.post('/create',customer.create);
    // router.post('/update',customer.update);
    // router.post('/delete',customer.delete);

    app.use('api/customer',router);
}