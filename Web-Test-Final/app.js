var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Table = require("./models/table"),
    seedDB = require("./seed");

//Connecting the app with the database
mongoose.connect("mongodb://localhost/mcc", { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

//For using body parser
app.use(bodyParser.urlencoded({extended: true}));

//For setting up the ejs view engine
app.set("view engine", "ejs");

seedDB();

// Application Code 
app.get("/",function(req, res){
    res.send("The page is running");
});

app.get("/table",function(req, res){
    //Get all the campgrounds from DB
    Table.find({}, function(err, allData){
        if(err){
            console.log(err);
        }
        else{
            // res.render("/table", {table: allData});
            res.send("Table is working")
        }
    });
});

// For listening the port and ip of localhost
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running");
});