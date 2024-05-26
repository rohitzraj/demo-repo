const express =  require("express");
const bodyParser  = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.post('/', (req, res)=>{
    console.log("rohit");
    console.log(req.body);
    res.send('hello world');
})

app.listen(port);