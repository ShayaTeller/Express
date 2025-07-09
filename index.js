import express, { json, response } from 'express';

const server = express((req, res) => { })
const PORT = 4545;
server.use(express.json());


// server.get('/greet', (req, res) => {
//     const time = new Date()
//     res.send(JSON.parse(`{"msg":"hi from get endpoint: ${time.toString()}"}`))

// })



// server.get('/users/:userId', (req, res) => {
//     res.send(req.params.userId)
// })




server.get('/greet/:neme', (req, res) => {
    const name = req.params.neme
    console.log(`i got name:${name}`);
    res.json({msg:`got name:${name}`})
    // console.log(json({msg:`got name ${name}`}))
    // res.end(console.log(res.msg))
})

server.get('/test',(req,res)=>{
    fetch(`http://localhost:4545/greet/bob`)
    .then(response=>{ return response.json()})
    .then(data=>{
        if(data.msg === `got name:bob`){
            res.json({"result":"ok"})
        }
        else{
            res.json({"result":"fail"})
        }
    })
})

// server.post('/action',(req,res)=>{
//     const body = req.body
//     res.json(body)
//     console.log(body)
// })



// server.get('/test/:name',(req,res)=>{
//     fetch('http://localhost:4545/greet/bob')
//     .then(response =>{response.json()})
//     .then(data=>{
//         if(data.msg === `got name: ${name}`){
//             res.json({result:"ok"})
//         }
//         else{
//             res.json({result:"fail"})
//         }
//     })
// })


// function logger(req, res, next) {
//     console.log(`git req to: ${req.method}, url: ${req.url}`);
//     req.isok = true;
//     next();
// }
// server.use(logger)

// server.get('/', (req, res) => {
//     res.end(res.stopTime   = Date.now().toString());
// })

// server.get('/home', (req, res) => {
//     res.send("hi from home")
// })











server.listen(PORT, () => {
    console.log(`listening now on port : ${PORT}`)
})