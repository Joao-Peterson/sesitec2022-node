const express = require("express");
const math = require("mathjs");
const cors = require("cors");
const app = express();

app.listen(4000, () => {});
app.use(cors())

app.get("/esp", (req, res) => {
    console.log("Connection from: [" + req.ip + "]");
    
    res.send(
        {
	    current: math.round(math.random(0.2, 4), 2),
	    frequency: math.round(math.random(30, 60), 2)
        }
    )
});
