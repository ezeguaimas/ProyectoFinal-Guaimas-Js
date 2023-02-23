const renderizarCarrito = document.getElementById("carritoAbajo")
const btnVerCarro = document.getElementById("icono-carrito")
const tituloCarrito = document.getElementById("titulo-carrito")
const comprar = document.getElementById("comprar")

const meterAlCarrito = (producto) => {
    let productoEnCarrito = carrito.find(item => item.codigo === producto.codigo)
    if (productoEnCarrito !== undefined) {
        productoEnCarrito.cantidad++
    } else {
        carrito.push({
            codigo: producto.codigo,
            tipo: producto.tipo,
            color:producto.color,
            talle:producto.talle,
            precio:producto.precio,
            foto: producto.foto,
            cantidad: 1,
        })
    }
}

function elementosEnCarrito() {
    
    const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0)

    document.getElementById("titulo-carrito").innerHTML = `<h2>CARRITO DE COMPRAS</h2>`;
    document.getElementById("comprar").innerHTML = `
        <div id="carrito-total" class="h3">TOTAL $ ${totalCarrito}</div>
        <button id="btn-comprar" class="btn btn-primary text-center" href="#cardPaymentBrick_container">Comprar / Enviar al LocalStorage</button>
    `;

    if (carrito.length === 0){
        limpiarInner()
        document.getElementById("carritoAbajo").innerHTML = `<h2 id="mensajeError">El carrito está vacio</h2>`;
    }else{
        carrito.forEach(producto => {
            let mostrarCarrito = document.createElement("div")
            mostrarCarrito.innerHTML = `
                <hr>
                <li id="li-carrito" class="list-group-item d-flex justify-content-between">
                    <div><img src="${producto.foto}" id="img-carrito" alt=""></div>
                    <div class="ms-2 me-auto">
                      <div id="tipo-carrito" class="fw-bold h5">${producto.tipo}</div>
                      <h4 class="h6">Color ${producto.color}</h4>
                      <h4 class="h6">Precio: ${producto.precio}</h4>
                      <h4 class="h6">Cantidad: ${producto.cantidad}</h4>
                    </div>
                    <div id="precio-carrito" class="fw-bold h4">Precio $${producto.precio * producto.cantidad}</div>
                    <span><a id="basura" href="#"><img src="./img/basura.png" id="${producto.codigo}" class="img-basura" alt="" title="Eliminar Productos"></a></span>
                </li>
                <hr>
                <hr>
            `
            renderizarCarrito.append(mostrarCarrito);
            
            const eliminarItem = document.getElementById(producto.codigo)
            console.log(eliminarItem);

            function eliminarDelCarrito() {
                const eliminarProducto = producto.codigo;
                carrito = carrito.filter((producto) => producto.codigo !== eliminarProducto);
                console.log(eliminarProducto);             
            }
            
            eliminarItem.addEventListener("click", () => {
                Swal.fire({
                    title: 'Está seguro de eliminar el producto?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Sí, quiero eliminarlo!',
                    cancelButtonText: 'No, no estoy seguro'
                }).then((respuesta) => {
            
                    if (respuesta.isConfirmed) {
                        eliminarDelCarrito(producto.codigo)
                        limpiarInner()
                        elementosEnCarrito()

                        Swal.fire({
                            title: 'Producto eliminado!',
                            icon: 'success',
                            text: 'El producto se eliminó del carrito',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            })
        })
        const btnComprar = document.getElementById("btn-comprar")
            btnComprar.addEventListener("click", () => {
            mandarAlLocalStorage("carritoLs",JSON.stringify(carrito))

            let counter = 0
            const cargarPago = setInterval(() => {
                counter++
                const spinner = document.getElementById("cardPaymentBrick_container")
                let esperar = document.createElement("div")
                esperar.innerHTML = `
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                `
                spinner.append(esperar);

                if (counter >= 3) {
                    clearInterval(esperar)
                    //pagar()
                }
            }, 1000)
            //pagar()
        });
    }

    //API MercadoPago - Simulador de pagos
    function pagar() {
    
        const mp = new MercadoPago('TEST-b2ef5ec7-59e5-454d-8190-23fbe77b66a6');
        const bricksBuilder = mp.bricks();
        
        const renderCardPaymentBrick = async (bricksBuilder) => {
            
            const settings = {
              initialization: {
                amount: totalCarrito, // monto a ser pago
              },
              callbacks: {
                onReady: () => {
                  /*
                    Callback llamado cuando Brick esté listo.
                    Aquí puedes ocultar loadings de su sitio, por ejemplo.
                  */
                },
                onSubmit: (cardFormData) => {
                  // callback llamado cuando el usuario haga clic en el botón enviar los datos
                
                  // ejemplo de envío de los datos recolectados por el Brick a su servidor
                  return new Promise((resolve, reject) => {
                      fetch("/process_payment", { 
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json",
                          },
                          body: JSON.stringify(cardFormData)
                      })
                      .then((response) => {
                          // recibir el resultado del pago
                          resolve();
                      })
                      .catch((error) => {
                          // tratar respuesta de error al intentar crear el pago
                          reject();
                      })
                    });
                },
                onError: (error) => { 
                  // callback llamado para todos los casos de error de Brick
                  console.error(error);
                },
              },
            };
            const cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
          };
          renderCardPaymentBrick(bricksBuilder);
    }
}

btnVerCarro.addEventListener("click", () => {
    limpiarInner()
    elementosEnCarrito(carrito)
});
