 
 
// 
var Controllers = { 

    // category
    getCategories: require("./Category/getCategories"),

    // product
    getProducts: require("./Product/getProducts"),
    addProduct: require("./Product/addProduct"),
    updateProduct: require("./Product/updateProduct"),
    deleteProduct: require("./Product/deleteProduct")

}


//
module.exports = Controllers