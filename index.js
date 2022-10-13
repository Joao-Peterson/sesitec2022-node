const express = require("express");
const math = require("mathjs");
const app = express();

app.listen(4000, () => {});

app.get("/esp", (req, res) => {
    res.send(
        {
			current: math.round(math.random(0.2, 4), 2),
			frequency: math.round(math.random(30, 60), 2)
        }
    )
});
