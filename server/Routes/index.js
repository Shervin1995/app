
var router = require("express").Router()
var {
    getProducts,
    getCategories,
    addProduct,
    updateProduct,
    deleteProduct
} = require("../Controllers")



// ---------------------------------------
// APIs
// ---------------------------------------  

// category
router.get('/categories', getCategories)


// product
router.get('/products', getProducts) 
router.post('/add-product', addProduct)
router.post('/update-product', updateProduct)
router.delete('/delete-product', deleteProduct)


//
module.exports = router 
