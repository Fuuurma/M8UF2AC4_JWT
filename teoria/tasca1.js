let studentGotBored = false
let studentPlayingLOL = true

function doTaskWithCallback(callback, errorCallback) {
    setTimeout(() => {
        if (studentGotBored) {
            errorCallback({
                name: 'Student got bored',
                message: ':('
            })
        } else if (studentPlayingLOL) {
            errorCallback({
                name: 'Student is playing LOL:',
                message: 'Async programming < LOL'
            })
        } else {
            callback('You are becoming an async master and a better person')
        }
    },2000)
}

function doTaskWithPromises(){
    promise = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                if (studentGotBored) {
                    reject({
                        name: 'Student got bored',
                        message: ':('
                    })
                } else if (studentPlayingLOL) {
                    reject({
                        name: 'Student is playing LOL:',
                        message: 'Async programming < LOL'
                    })
                } else {
                    resolve('You are becoming an async master and a better person')
                }
            },2000)
        })
    return promise
}

// UNCOMMENT TO TEST doTaskWithCallback function
// COMMENT OUT when converting into a module
doTaskWithCallback(
    message => { console.log(message) },
    error => { console.log(error.name + ' ' + error.message) })

module.exports = doTaskWithPromises