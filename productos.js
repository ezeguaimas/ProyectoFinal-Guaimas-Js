//ARRAY
//Tuve que cambiar la variable productos de const a let para que pueda se modificada por los datos traidos del Local Storage
let productos = [
    {
        codigo: "1",
        tipo: "PANTALON",
        color: "AMARILLO",
        talle: "S",
        stock: 4,
        precio: 4000,
        foto: "https://thumbs.dreamstime.com/b/el-retrato-de-la-mujer-joven-moda-se-visti-en-pantalones-amarillos-vestida-fondo-rosado-148215893.jpg"
    },
    {
        codigo: "2",
        tipo: "PANTALON",
        color: "NEGRO",
        talle: "M",
        stock: 6,
        precio: 3500,
        foto: "https://i.pinimg.com/originals/fe/4b/41/fe4b414022650a8c870f256951599834.jpg"
    },
    {
        codigo: "3",
        tipo: "REMERA",
        color: "BLANCO",
        talle: "M",
        stock: 8,
        precio: 2500,
        foto: "https://i.pinimg.com/550x/aa/e5/31/aae5310bb7af7bf1d514a78ed307c214.jpg"
    },
    {
        codigo: "4",
        tipo: "MEDIAS",
        color: "BLANCO",
        talle: "L",
        stock: 20,
        precio: 1000,
        foto: "https://i.pinimg.com/474x/55/58/08/555808ade1c6580b1c3a75ec5cc80c64.jpg"
    },
    {
        codigo: "5",
        tipo: "CAMPERA",
        color: "AZUL",
        talle: "S",
        stock: 3,
        precio: 7000,
        foto: "https://i.pinimg.com/736x/22/63/eb/2263ebabe5df0732cd1482388f63a0ad.jpg"
    },
    {
        codigo: "6",
        tipo: "CAMPERA",
        color: "NEGRO",
        talle: "L",
        stock: 7,
        precio: 8000,
        foto: "https://i.pinimg.com/736x/c4/65/2d/c4652d4bd07393bcc9520d7802d76aec.jpg"
    },
    {
        codigo: "7",
        tipo: "BOXER",
        color: "ROJO",
        talle: "L",
        stock: 10,
        precio: 2000,
        foto: "https://i.pinimg.com/originals/3e/57/b7/3e57b7cd0a533e211e48b3d1c25221b3.jpg"
    },
    {
        codigo: "8",
        tipo: "VESTIDO",
        color: "NARANJA",
        talle: "S",
        stock: 2,
        precio: 15000,
        foto: "https://i.pinimg.com/550x/a6/71/7f/a6717f216414b653dfdf8e8043500b59.jpg"
    },
    {
        codigo: "9",
        tipo: "VESTIDO",
        color: "ROSA",
        talle: "M",
        stock: 4,
        precio: 20000,
        foto: "https://i.pinimg.com/originals/16/79/d7/1679d7ae3c569101846368dc77def497.jpg"
    },
    {
        codigo: "10",
        tipo: "SWEATER",
        color: "BEIGE",
        talle: "L",
        stock: 4,
        precio: 6000,
        foto: "https://i.pinimg.com/736x/8e/1f/7e/8e1f7ee62e506bc02f8f61fb6804f776--cable-knit-sweaters-fashion-fall.jpg"
    },
    {
        codigo: "11",
        tipo: "REMERA",
        color: "NEGRO",
        talle: "L",
        stock: 9,
        precio: 2500,
        foto: "https://i.pinimg.com/736x/1e/a7/f5/1ea7f5850d93a727db8145ed18ca3ac8.jpg"
    },
    {
        codigo: "12",
        tipo: "CAMISA",
        color: "VERDE",
        talle: "M",
        stock: 3,
        precio: 7500,
        foto: "https://i.pinimg.com/originals/82/cb/59/82cb597440f60c4def8ee7a004d9a358.jpg"
    },
    {
        codigo: "13",
        tipo: "CAMISA",
        color: "ROJO",
        talle: "L",
        stock: 4,
        precio: 7500,
        foto: "https://i.pinimg.com/564x/12/4b/d2/124bd27991ddf677ebffbd5fa495027f--asos-fashion-fashion-finder.jpg"
    }
]

//CONSTRUCTOR
class Producto{
    constructor(codigo, tipo, color, talle, stock, precio, foto){
        this.codigo = codigo.toString().toUpperCase();
        this.tipo = tipo.toString().toUpperCase();
        this.color = color.toString().toUpperCase();
        this.talle = talle.toString().toUpperCase();
        this.stock = parseInt(stock);
        this.precio = parseFloat(precio);
        this.foto = foto;
    }
}


//INCORPORAR ELEMENTOS EN EL ARRAY
productos.push(new Producto("14", "gorra", "rojo", "s", 5, 4000,"https://i.pinimg.com/564x/60/75/b3/6075b3decf56efe5dbedef0f3d2933b1.jpg"));
productos.push(new Producto("15", "cinto", "negro", "m", 4, 8000, "https://i.pinimg.com/736x/d8/94/28/d894282af85e679a20257117f39cc055.jpg")); 
productos.push(new Producto("16", "pañuelo", "blanco", "l", 7, 2500, "https://i.pinimg.com/564x/4a/f4/1c/4af41cf5d47d53a061bf1187e19cf5e9.jpg")); 
productos.push(new Producto("17", "bufanda", "negro", "s", 6, 3000, "https://i.pinimg.com/564x/5c/0c/24/5c0c2419c59afc21ea08bc4ceecd1673.jpg")); 
productos.push(new Producto("18", "chaleco", "amarillo", "l", 7, 4500, "https://i.pinimg.com/564x/eb/31/4a/eb314a4c817f6b622ba18d7094f0fc8c.jpg")); 
productos.push(new Producto("19", "pollera", "amarillo", "m", 3, 4000, "https://i.pinimg.com/564x/cf/6e/ce/cf6ecec8749bb20de23dc3b405ff0689.jpg")); 
productos.push(new Producto("20", "camisa", "negro", "s", 4, 7000, "https://i.pinimg.com/564x/84/5f/e4/845fe4e09b34a9ddbfdcbd204b511a4f.jpg")); 
productos.push(new Producto("21", "boxer", "negro", "l", 8, 2000, "https://d22fxaf9t8d39k.cloudfront.net/3c89e8575ac5d1dfc3f7a9645882fa2dda0877c13474fb9cce02c805f90684f712766.jpeg")); 
productos.push(new Producto("22", "medias", "verde", "s", 6, 1500, "https://i.pinimg.com/564x/55/95/f2/5595f2ef007cff343ee0aad2acbd2ead.jpg")); 
productos.push(new Producto("23", "pullover", "rosa", "s", 3, 5000, "https://i.pinimg.com/564x/83/c9/8e/83c98eeaab7ad1648a9c4ad9f07bd724.jpg"));

//CARRITO
let carrito = []

//ALMACENAR EN LS
const mandarAlLocalStorage = (clave, valor) => {localStorage.setItem(clave,valor)};

//mandarAlLocalStorage("productosLs",JSON.stringify(productos))


const carritoEnLocalStorage = JSON.parse(localStorage.getItem("carritoLs"));

const productosEnLocalStorage = JSON.parse(localStorage.getItem("productosLs"));

//OPERADOR TERNARIO
carritoEnLocalStorage ? carrito = carritoEnLocalStorage : carrito = []

productos != productosEnLocalStorage ? productos = productosEnLocalStorage : mandarAlLocalStorage("productosLs",JSON.stringify(productos))
