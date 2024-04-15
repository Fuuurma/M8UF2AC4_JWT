
const authed = (req, res, next) => {
	if (!req.session.loggedin){
        res.render('login',{error: "Please log in to manage products"}) 
    }
    else next()
}

module.exports = authed