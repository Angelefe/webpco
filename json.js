const arrImport = []
function importar (arrImport, model, data) {
  {console.log("comienza importacion");
  var a = 0;
  for (let i = 0; i < arrImport.length; i++) {
    console.log("guardando pedido "+i);
    var data = {
      cli: arrImport[i].cli,
      ent: arrImport[i].ent,
      pre: arrImport[i].pre,
      ped: arrImport[i].ped ,
    }

    var pedido = new Pedido(data);

    pedido.save(function  (err) {
      if(!err){
        console.log("pedido guardado");
      }
      else {
        console.log("*****************************");
        console.log(err);
        console.log("*****************************");
        a++;
      }
    })
  }
  console.log("Importación terminada con "+a+" errores");
}
}
module.exports = clientes;
