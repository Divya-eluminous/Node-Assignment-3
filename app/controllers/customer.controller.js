const db = require('../models');
const customer = db.customer;
const { validationResult } = require("express-validator");

exports.list= async (req,res,next)=>{
    const errors = validationResult(req);
    console.log('in customer list');
    if(!errors.isEmpty())
    {
        return res.status(200).jsonp({ error: true, data: errors.array() });
    }else{
      const data = await customer.findAll({
               
      }).catch((error)=>{
        console.log(err);
        next(err)
      });

      res.status(200).json(data);
    }
}

