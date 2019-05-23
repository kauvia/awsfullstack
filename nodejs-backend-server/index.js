const express = require("express");
const app = express();
const http = require("http").Server(app);
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 4010;

//allow cors
app.use(cors())

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

http.listen(port, () => {
	console.log(`Server running at ${port}`);
});

const testGet = (req,res) => {
    res.send({message:"successful test Get from nodejs"})

}
const testPost = (req,res) => {
    const recievedData = req.body
    console.log(recievedData);
    res.send({message:{text:"you sent this", data:recievedData}})
    
}



app.get("/nodeapi/test", testGet)
