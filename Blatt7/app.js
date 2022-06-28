const express = require('express');
const app = express();

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render("8-1");
});

app.post("/", function (req, res) {
    //console.log(req.body.summe);
    res.send("Summe: " + req.body.summe + " Flaschen: "+ req.body.flaschenG);
});


app.listen(3000, function () {
    console.log(
        'Listening on port 3000!');
});