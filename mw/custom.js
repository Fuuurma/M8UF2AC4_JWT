const customMW = function (req, res, next) {
    console.log("Hola, mensaje recibido")
    next()
  }

  module.exports = customMW
