const express = require('express')

const router = express.Router()

const category = require('./category/category')
const products = require('./products/products')
const other = require('./other/other')

router
    .get('/category', category.ALL_CATEGORY)
    .get('/infotitles', other.INFO_TITLES)
    .get('/products/:id', products.PRODUCT_ID)

module.exports = router