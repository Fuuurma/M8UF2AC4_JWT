const doTaskWithPromises = require("./tasca1")

doTaskWithPromises()
    .then((message) => {
        console.log(message)
        return "TUTO BEM"
    })
    .then((message) => {
        console.log(message)
    })
    .catch((errorMessage) => {
        console.log(errorMessage.name, errorMessage.message)
    })