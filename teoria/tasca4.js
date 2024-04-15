const doTaskWithPromises = require("./tasca1")

// result = await doTaskWithPromises()
// console.log(result)
// SyntaxError: await is only valid in async functions and the top level bodies of modules

const run = async () => {
    result = await doTaskWithPromises()
    console.log(result)
}

run()