// Storage y Json

// --------- EJEMPLO array de Objetos ---------- //
const usuarios = [
    { id: 11, usuario: "Ivan Rojas" },
    { id: 12, usuario: "Joana Ibanez" },
    { id: 13, usuario: "Estela Paz" },
    { id: 14, usuario: "Jose Rivas" }
];
console.log(usuarios);

//Funcion para guardar en el LocalStorage
const guardarLocal = (clave, valor) => { sessionStorage.setItem(clave, valor) };

//invoco a la funcion
guardarLocal("listaUsuarios", JSON.stringify(usuarios));

class Usuario {
    constructor(obj) {
        this.id = obj.id;
        this.usuario = obj.usuario.toUpperCase();
        
    }
  
}
//Obtenemos el listado de usuarios almacenado
const almacenados = JSON.parse(sessionStorage.getItem("listaUsuarios"));
const misUsuarios = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo usuario.
for (const objeto of almacenados)
    misUsuarios.push(new Usuario(objeto));

console.log(misUsuarios);

buscarPorid();
function buscarPorid() {
    let identificacion = parseInt(prompt("Ingrese numero de id del usuario"));
    for (const e of misUsuarios)
        if (e.id == identificacion) {
            console.log(e);
            break;
        } else {
            console.log("usuario no encontrado");
        }
    }
 