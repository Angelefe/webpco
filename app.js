var express = require('express');

var bodyParser = require("body-parser");

// var User = require("./models/user").User;

// var session=require('cookie-session');
//
// var router_app = require("./routes_app");
//
// var session_middleware = require('./middlewares/session');
//
var app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use(session({
//   name: "session",
//   keys: ["llave1","llave2"],
// }));

app.set("view engine", "jade" );

app.get("/",function (req,res) {
    res.render("index");
});
app.get("/quienes",function (req,res) {
    res.render("quienes");
});
app.get("/enlace",function (req,res) {
    res.render("enlace");
});
app.get("/notas",function (req,res) {
    res.render("notas");
});
app.get("/periodicos",function (req,res) {
    res.render("periodicos");
});
app.get("/manifiesto",function (req,res) {
    res.render("manifiesto");
});
app.get("/mujer",function (req,res) {
    res.render("mujer");
});
app.get("/contacto",function (req,res) {
    res.render("contacto");
});
// app.get("/Nosotros",function (req,res) {
//   res.render("Nosotros");
// });
//
// app.get("/login",function (req,res) {
//   res.render("login");
// });
//
// app.get("/register",function (req,res) {
//   res.render("register");
// });
//
// app.post("/validate",function (req,res) {
//   console.log(req.body.username);
//   var user = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//     password_confirmation: req.body.password_confirmation,
//   });
//
//   user.save( function(err,user,numero) {
//
//     if (err) {
//       console.log(String(err));
//       res.render("register", {error: String(err)});
//     }
//
//     else {
//       res.render("validate", { email: req.body.email});
//     }
//
//   });
// });
//
// app.post("/sessions",function(req,res){
//
//   User.findOne({
//     email: req.body.email,
//     password: req.body.password
//   },
//   function(err,user){
//     req.session.user_id = user._id;
//     res.redirect("/app");
//   })
//
// })
//
// app.use("/app",session_middleware);
//
// app.use("/app",router_app);

app.listen(8080);
