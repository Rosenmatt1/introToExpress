var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")

var app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

//Body ParserMiddle Ware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//set Static Path
app.use(express.static(path.join(__dirname, "public")))

// var logger = function(req, res, next) {
//   console.log("Logging...")
//   next();
// }
// app.use(logger)

app.get('/', function (req, res) {
  // res.json(people)
  // res.send("Hello World")
  res.render('index', {
    title: 'Customers'
  })
})

app.listen(3000, function(){
  console.log("server started on port 3000")
})