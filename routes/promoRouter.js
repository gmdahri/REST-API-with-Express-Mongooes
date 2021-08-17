const express = require ('express');
const bodyParser =  require('body-parser');
const { raw } = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('will show all promotion!');
})
.post((req,res,next)=>{
    res.end('will add the promotion : ' + req.body.name +
     " and the description : " + req.body.description)
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('Put operation not supported');
})
.delete((req,res,next)=>{
    res.end('deleting all promotion');
});

promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("will send details of the promo: "+req.params.promoId + 'to you!')
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end("Post operation not supported on /promotions/"+req.params.promoId);
})
.put((req,res,next)=>{
    res.write('Updating the promo: '+ req.params.promoId + '\n');
    res.end('will update the promo: ' + req.body.name + 
    ' with description: ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end("Deleting all the promo: " + req.params.promoId);
});

module.exports = promoRouter;