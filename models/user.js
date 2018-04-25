// var mongoose = require('mongoose');
//
// var Schema = mongoose.Schema;
//
// mongoose.connect("mongodb://localhost/distribuidora");
//
// var posibles_sex = ["M", "F" ];
//
// var email_match = [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Coloca un email válido"];
//
// var userSchemaJSON= {
//   email: {
//     type: String,
//     required: "El email es obligatorio",
//     match: email_match,
//   },
//   password: {
//     type: String,
//     required: "La contraseña es obligatoria",
//     maxlength: [50,"La contraseña es muy larga"],
//     validate: {
//       validator: function(p){
//         return this.password_confirmation == p;
//       },
//       message: "Las contraseñas no coinciden",
//     }
//   },
//   name: String,
//   surname: String,
//   username: {
//     type: String,
//     required: "El nombre de usuario es obligatorio",
//     maxlength: [50,"El nombre de usuario es muy largo"]
//   },
//   age: {
//     type: Number,
//     min: [5, "La edad no puede ser menor que 5"],
//     max: [100, "La edad no puede ser mayor que 100"],
//   },
//   sex: {
//     type: String,
//     enum: {
//       values: posibles_sex,
//       message: "Opción no válida",
//     }
//   },
//   validated: Boolean,
// }
//
// var user_schema = new Schema(userSchemaJSON);
//
// user_schema.virtual("password_confirmation")
// .get(function(){
//   return this.p_c;
// })
// .set(function  (password) {
//   this.p_c = password;
// });
//
// var User = mongoose.model("User",user_schema);
//
// module.exports.User = User;
