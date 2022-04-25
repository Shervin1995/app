 
 
// 
var Controllers = { 

    // category
    getCategories: require("./Category/getCategories"),
    addCategory: require("./Category/addCategory"),

    // product
    getProducts: require("./Product/getProducts"),
    addProduct: require("./Product/addProduct"),
    updateProduct: require("./Product/updateProduct"),
    deleteProduct: require("./Product/deleteProduct")

}


//
module.exports = Controllers