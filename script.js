//VARIABLES

const carrito = document.querySelector('#carrito');
const carrito2 = document.querySelector('#carrito2');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const contenedorCarrito2 = document.querySelector('#lista-carrito2 tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const ListaProductos = document.querySelector('.productos');
const ListaProductos2 = document.querySelector('.productos');



//creo una plantilla PARA ZAPATILLAS
class producto {

    constructor(id,articulo, imagen, detalle, talle, precio, cantidad, stock){
        this.id = id;
        this.articulo = articulo,
        this.imagen = imagen,
        this.detalle = detalle,
        this.talle = talle,
        this.precio = precio,
        this.cantidad = cantidad
        this.stock = stock
    }
}


// PARA SABER MI INVENTARIO Y TOMAR DATOS 

const inventario = [];
inventario.push(new producto(01, "Zapatilla Adidas", "img/zapatilla1.png" , "Sport 360", 39, 6500, 1, 10 ));
inventario.push(new producto(02, "Zapatilla Adidas", "img/zapatilla1.png", "Sport 360", 40, 6600, 1, 10 ));
inventario.push(new producto(03, "Zapatilla Adidas", "img/zapatilla1.png", "Sport 360", 41, 6700, 1, 10 ));

inventario.push(new producto(04, "Zapatilla Reedok", "img/zapatilla2.png",  "Adventure", 39, 5600, 1, 10 ));
inventario.push(new producto(05, "Zapatilla Reedok", "img/zapatilla2.png",  "Adventure", 40, 5700, 1, 10 ));
inventario.push(new producto(06, "Zapatilla Reedok", "img/zapatilla2.png",  "Adventure", 41, 5800, 1, 10 ));

inventario.push(new producto(07, "Zapatilla Adidas", "img/zapatilla3.png",  "Sport Team", 39, 7300, 1, 10 ));
inventario.push(new producto(08, "Zapatilla Adidas", "img/zapatilla3.png",  "Sport Team", 40, 7300, 1, 10 ));
inventario.push(new producto(09, "Zapatilla Adidas", "img/zapatilla3.png",  "Sport Team", 41, 7300, 1, 10 ));

inventario.push(new producto(10, "Campera Adidas", "img/campera10.png",  "Argentina", "M", 12500, 1, 10 ));
inventario.push(new producto(11, "Campera Adidas", "img/campera10.png",  "Argentina", "L", 12600, 1, 10 ));
inventario.push(new producto(12, "Campera Adidas", "img/campera10.png",  "Argentina", "XL", 12700, 1, 10 ));

inventario.push(new producto(13, "Campera Adidas", "img/campera11.png",  "Boca Juniors", "M", 13200, 1, 10 ));
inventario.push(new producto(14, "Campera Adidas", "img/campera11.png",  "Boca Juniors", "L", 13500, 1, 10 ));
inventario.push(new producto(15, "Campera Adidas", "img/campera11.png",  "Boca Juniors", "XL", 13700, 1, 10 ));

inventario.push(new producto(16, "Campera Adidas", "img/campera12.png",  "River Plate", "M", 11500, 1, 10 ));
inventario.push(new producto(17, "Campera Adidas", "img/campera12.png",  "River Plate", "L", 11600, 1, 10 ));
inventario.push(new producto(18, "Campera Adidas", "img/campera12.png",  "River Plate", "XL", 11800, 1, 10 ));


//CREO LA LISTA PARA EL CARRITO
const listaCarrito = [];


//PAGINA PRODUCTOS

//AGREGANDO HTML A LA PAGINA PRODUCTOS EMBASE EL ARRAY

const FuncionAgregar = {
    agregarProducto:function (index) {
        for(let i = 0 ; i<inventario.length ; i++){
            if(i == index){
                listaCarrito.push(inventario[i]);
                console.log(listaCarrito);
                
                alert(`SE AGREGO ${inventario[i].articulo} -- TALLE: ${inventario[i].talle}  AL PEDIDO`);
                
                
            }
        }
    }
};


// CREO EL HTML QUE IRA EN LA PAGINA PRODUCTOS
const card = document.getElementsByClassName("listaProductos");

for(i=0; i<card.length ; i++){
    let div1 = document.createElement("div");

    div1.innerHTML = 

    `
    <div class="imagen__producto">
    <img src='${inventario[i].imagen}' , alt='${inventario[i].detalle}'>
    </div>
                    <p>${inventario[i].articulo}</p>
                    <p>${inventario[i].detalle}</p>
                    <p>TALLE: ${inventario[i].talle}</p>
                    <div class="productos__precio">
                    <p>$${inventario[i].precio}</p>
                    </div>
                    <div class="botonComprar">
                        <p type="button" onclick="FuncionAgregar.agregarProducto(${i}), verCarritoProductos()">COMPRAR</p>
                    </div>

    `
    card[i].appendChild(div1);
}



//FUNCION PARA VER CARRITO EN LA PAGINA PRODUCTOS


function verCarritoProductos(){
    limpiarHTML2();
    
    for( elemento of listaCarrito){
        
        const verCarro = document.createElement('tr');
        verCarro.classList.add("item")

        verCarro.innerHTML = 
        `
        <th>
        ${elemento.articulo}
        </th>
        <th>
        <img src="${elemento.imagen}" alt=""> 
        </th>
        <th>
        ${elemento.detalle}
        </th>

        <th>
        ${elemento.talle}
        </th>

        <th>
        $${elemento.precio}
        </th>

        <th>
         ${elemento.cantidad}
        </th>

        <th>
         <img src="img/botonMas.png" alt="mas">
        </th>

        <th>
        <img src="img/botonMenos.png" class="apretar1" alt="menos">
        </th>

        
        `
        ;
        
        contenedorCarrito2.appendChild(verCarro);
        let itemLimpiar = document.querySelector('.item ')

        let boton10 = document.querySelector('.apretar1')
    boton10.addEventListener("click", apretarboton )

    function apretarboton(){
        itemLimpiar.innerHTML=' ';
        console.log("apretando...")
            }
 
    }
   
    
    }

    





verCarritoProductos();

// VER EL CARRITO EN EL INDEX

 verListaCarrito();
function verListaCarrito(){
   
    //LIMPIAR EL HTML DEL TBODY
    limpiarHTML();
    let total = 0;

    //recorro el carrito
    for(elemento2 of listaCarrito){  
        const row = document.createElement('tr'); //creo html
        row.innerHTML = 
        `

        <th>
        ${elemento2.articulo}
        </th>
        <th>
        <img src="${elemento2.imagen}" alt=""> 
        </th>
        <th>
        ${elemento2.detalle}
        </th>

        <th>
        ${elemento2.talle}
        </th>

        <th>
        $${elemento2.precio}
        </th>

        <th>
         ${elemento2.cantidad}
        </th>

        `;
        total += elemento2.precio // es igual a poner total = total + elemento.precio

        //para agregar html al tbody del carrito
        contenedorCarrito.appendChild(row);
    }
    console.log(`SON ${listaCarrito.length} PRODUCTOS \n TOTAL DE LA COMPRA $ ${total}`);
    /* ES LO MISMO QUE PONER == console.log("SON " + listaCarrito.length + " PRODUCTOS\n TOTAL DE LA COMPRA: $" + total );*/
}

// FUNCION PARA LIMPIAR CARRITO ACUMULADO  EN LA PAGINA DE HOME

function limpiarHTML(){
    // forma lenta -- contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

// FUNCION PARA LIMPIAR CARRITO ACUMULADO EN LA PAGINA PRODUCTOS
function limpiarHTML2(){
    // forma lenta -- contenedorCarrito.innerHTML = '';

    while(contenedorCarrito2.firstChild){
        contenedorCarrito2.removeChild(contenedorCarrito2.firstChild)
    }
}












