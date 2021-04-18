const express = require("express");
const app = express();

app.use(express.static('public'))   ;

app.set('view engine', 'ejs');


// console.log(__dirname + '/public');


app.get("/", function (req, res) {
    res.render("index", {dasboard: "selected", clas: "dashButton", exam: "dashButton", timetable: "dashButton", profile: "dashButton"});
});

app.get("/class", function (req, res) {
    res.render("class", {dasboard: "dashButton", clas: "selected", exam: "dashButton", timetable: "dashButton", profile: "dashButton"});
});

app.get("/exam", function (req, res) {
    res.render("exam", {dasboard: "dashButton", clas: "dashButton", exam: "selected", timetable: "dashButton", profile: "dashButton"});
});

app.get("/timetable", function (req, res) {
    res.render("timetable", {dasboard: "dashButton", clas: "dashButton", exam: "dashButton", timetable: "selected", profile: "dashButton"});
});

app.get("/profile", function (req, res) {
    res.render("profile", {dasboard: "dashButton", clas: "dashButton", exam: "dashButton", timetable: "dashButton", profile: "selected"});
});

app.listen(3000, function () {
    console.log("Started server at 3000");
})