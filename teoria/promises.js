// Declaramos función asíncrona sín callback
function asyncFunction() {
    setTimeout(() => { return "BOOM" }, 2000)
}

// console.log(asyncFunction())

// Declaramos función asíncrona CON callback
function asyncFunctionWithCallback(callback) {
    setTimeout(() => { callback("BOOM") }, 1000)
}

function callbackMolon(resultado){
    //envia ese resultado por whatsapp a una persona
}

// console.log(asyncFunctionWithCallback()) ESTO YA NO FUNCIONA
// asyncFunctionWithCallback(console.log)
// asyncFunctionWithCallback(callbackMolon)

// antiBombas = true
// Añadimos callback para el error
function asyncFunctionWithErrorCallback(callback, errorCallback){
    setTimeout(()=> {
        if(antiBombas == false){callback("BOOM");}
        else{errorCallback("UFFF");}
    },2000)
}

// asyncFunctionWithErrorCallback(console.log,console.log)

// Envolvemos función en promesa
// function asyncFunctionWithPromise() {
//     promise = new Promise(
//         // Declaramos el EJECUTOR de la promesa
//         // El ejecutor recibe como parámetros dos funciones de callback (resolve, reject)
//         // Estos callback no hay que declararlos: los proporciona JS
//         (resolve, reject) => {
//             // Declaramos el código asíncrono
//             setTimeout(() => { resolve("BOOM") }, 2000)
//         })
//     return promise
// }

// promise=asyncFunctionWithPromise()
// setInterval(()=>{console.log(promise)},500)
antiBombas = false

// Ejemplo con resolve y reject
function asyncFunctionWithPromise() {
    promise = new Promise(
        // Declaramos el EJECUTOR de la promesa
        // El ejecutor recibe como parámetros dos funciones de callback (resolve, reject)
        // Estos callback no hay que declararlos: los proporciona JS
        (resolve, reject) => {
            // Declaramos el código asíncrono
            setTimeout(() => {
                if (antiBombas==true) {
                    resolve("GOOD")
                }
                else {
                    reject("BOOM")
                }
            }, 2000)
        })
    return promise
}

// CONSUMO DE LA PROMESA POR "POOLING"
// result = asyncFunctionWithPromise()
// Al invocar la función, se crea una nueva promesa: el ejectutor se lanza inmediatamente
// setInterval(()=>{console.log(result)},200)

// CONSUMO DE LA PROMESA "ON-DEMAND"
asyncFunctionWithPromise()
.then(result => { console.log(result) }, error => { console.log(error) })
// Pueden usarse distintas funciones consumidoras predefinidas
// Éstas consumen los valores de retorno de los callbacks resolve y reject
// CONSUMIDOR THEN()
// then(function(result),function(error))
// el result lo retorna el callback resolve, y el error lo retorna el callback reject


// OTROS CONSUMIDORES CATCH(), FINALLY

// CONSUMIDORES ENCADENADOS

// CONSUMO DE PROMESAS CON AWAIT
// await asyncFunctionWithPromise(2)

// const funcionAsync = async ()=>{
//     result = await asyncFunctionWithPromise(2)
//     console.log(result)
// }

const funcionAsync = async () => {
    try {
        result = await asyncFunctionWithPromise(1)
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}

// funcionAsync()

// Más en https://es.javascript.info/promise-basics
// Muy buena explicación de promesas