//function pagar() {
//    
//    const mp = new MercadoPago('TEST-b2ef5ec7-59e5-454d-8190-23fbe77b66a6');
//    const bricksBuilder = mp.bricks();
//    
//    const renderCardPaymentBrick = async (bricksBuilder) => {
//        
//        const settings = {
//          initialization: {
//            amount: 100, // monto a ser pago
//          },
//          callbacks: {
//            onReady: () => {
//              /*
//                Callback llamado cuando Brick esté listo.
//                Aquí puedes ocultar loadings de su sitio, por ejemplo.
//              */
//            },
//            onSubmit: (cardFormData) => {
//              // callback llamado cuando el usuario haga clic en el botón enviar los datos
//            
//              // ejemplo de envío de los datos recolectados por el Brick a su servidor
//              return new Promise((resolve, reject) => {
//                  fetch("/process_payment", { 
//                      method: "POST",
//                      headers: {
//                          "Content-Type": "application/json",
//                      },
//                      body: JSON.stringify(cardFormData)
//                  })
//                  .then((response) => {
//                      // recibir el resultado del pago
//                      resolve();
//                  })
//                  .catch((error) => {
//                      // tratar respuesta de error al intentar crear el pago
//                      reject();
//                  })
//                });
//            },
//            onError: (error) => { 
//              // callback llamado para todos los casos de error de Brick
//              console.error(error);
//            },
//          },
//        };
//        const cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
//      };
//      renderCardPaymentBrick(bricksBuilder);
//}