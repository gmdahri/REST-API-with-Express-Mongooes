const express = require ('express');
const bodyParser =  require('body-parser');
const { raw } = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('will show all leader!');
})
.post((req,res,next)=>{
    res.end('will add the leader : ' + req.body.name +
     " and the description : " + req.body.description)
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('Put operation not supported');
})
.delete((req,res,next)=>{
    res.end('deleting all leader');
});

leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("will send details of the leader: "+req.params.leaderId + 'to you!')
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end("Post operation not supported on /leader/"+req.params.leaderId);
})
.put((req,res,next)=>{
    res.write('Updating the leader: '+ req.params.leaderId + '\n');
    res.end('will update the leader: ' + req.body.name + 
    ' with description: ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end("Deleting all the leader: " + req.params.leaderId);
});

module.exports = leaderRouter;