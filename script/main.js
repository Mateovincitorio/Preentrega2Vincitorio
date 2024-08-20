class producto {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }

    getProductos = ()=>{
        let nom
        do {
            nom = prompt("Ingrese su producto (largo maximo de la lista: 10 productos)")
           if (nom == null || nom == "" || !isNaN(nom)) {
            console.log("Introduzca producto valido")
           }else{
            this.nombre = nom
           }
        } while (nom == "" || !isNaN(nom));
    }

    getPrecios = ()=>{
        let precio
        do {
            precio = parseFloat(prompt("Ingrese el precio de su producto"))
           if (precio == null || precio == "" || isNaN(precio)) {
            console.log("Introduzca un precio valido")
           }else{
            this.precio = precio
           }
        } while (precio == "" || isNaN(precio));
    }
}
const productosIngresados= []

   for (let i = 0; i < 10; i++) {
    let productonuevo = new producto()
    const date=new Date()
    productonuevo.getProductos()
    productonuevo.getPrecios()
    date.getDate()
    productosIngresados.push(productonuevo)
    console.log("Usted compro "+ productonuevo.nombre + " y le costó " + productonuevo.precio + "$. \n El dia " + date)
   }

   
   
   const filtro = parseFloat(prompt("Ingrese un filto de precio"))


function ordenarElementos(arr){
    let ordenados = arr.filter((el)=> el.precio < filtro)
if (filtro == "" || filtro < 0 || ordenados.length === 0 || isNaN(filtro)) {
            console.log("No existe ningun producto mas barato que tu filtro");
    }else{
        console.log(ordenados);
    }
}

const iva = 0
function sumarTotal(arr){
    const total = arr.reduce((acc, el)=>{
        return acc + el.precio;
    }, iva)
    console.log("El total de la compra es de: " + total)
}



ordenarElementos(productosIngresados);
sumarTotal(productosIngresados);



