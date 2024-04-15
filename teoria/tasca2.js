const doTaskWithPromises = require("./tasca1")

doTaskWithPromises()
    .then(
        (message) => {
            console.log(message)
        },
        (errorMessage) => {
            console.log(errorMessage.name, errorMessage.message)
        })

// doTaskWithPromises()
//     .then((message)=>{
//         console.log(message)
//     })
//     .catch((errorMessage)=>{
//         console.log(errorMessage.name, errorMessage.message)
//     })