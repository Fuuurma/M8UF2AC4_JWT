const express = require('express')
const router = express.Router()

const getProducts = require('../controllers/getProducts')
const createProduct = require('../controllers/createProduct')
const deleteProduct = require('../controllers/deleteProduct')
const createView = require('../controllers/createView')
const login = require('../controllers/login')
const logout = require('../controllers/logout')
const auth = require('../controllers/auth')
const authed = require('../mw/authed')

// Non-secured routes
router.get('/', login)
router.post('/auth', auth)
router.get('/logout', logout)

// Secured routes
router.get('/create', authed, createView)
router.get('/list', authed, getProducts)
router.post('/api/products/', authed, createProduct)
router.post('/deleteProduct', authed, deleteProduct)

module.exports = router
