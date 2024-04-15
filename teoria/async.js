const funcionAsincrona = async () => {
    return 1;
}

// Es lo mismo que
// async function funcionSincrona(){
//     return Promise.resolve(1);
// }

// console.log(funcionSincrona())
// funcionSincrona().then((result)=>{console.log(result)})

const funcionAsincronaConPromesa = async () => {
     let promise = new Promise( resolve => {
        setTimeout(()=>resolve("GOOD"),1000)
     })
     let result =  promise
    //  let result =  await promise
     console.log(result)
}

funcionAsincronaConPromesa()

// Más en https://es.javascript.info/async-await
// Muy buena explicación de async-await