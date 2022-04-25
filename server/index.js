var express = require("express")
var app = express()



// ---------------------------------------
// middleware
// ---------------------------------------
app.use(express.json()); 
app.use(express.urlencoded({extended: true, limit: '1mb'}));



// ---------------------------------------
// API
// ---------------------------------------
app.use(require("./Routes"))

// ---------------------------------------
// server
// ---------------------------------------
app.listen(process.env.PORT || 3000)