var {PRODUCT} = require("../../DataBase")


// -----------------------------
// READ
// -----------------------------
async function getProducts(req, res) {

    var products = await PRODUCT.findAll({})
    res.json(products)


}


//
module.exports = getProducts