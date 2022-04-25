
var router = require("express").Router()
var {

    getCategories,
    addCategory,
    
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct

} = require("../Controllers")



// ---------------------------------------
// APIs
// ---------------------------------------  


// category
router.get('/categories', getCategories)
router.post('/add-category', addCategory)


// product
router.get('/products', getProducts) 
router.post('/add-product', addProduct)
router.post('/update-product', updateProduct)
router.delete('/delete-product', deleteProduct)


//
module.exports = router 
