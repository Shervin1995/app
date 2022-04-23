var {PRODUCT} = require("../../DataBase")


// -----------------------------
// CREATE
// -----------------------------
async function addProduct(req, res) {

    var newProduct = {
        id: await PRODUCT.max('id', {}) + 1,
        name: req.body.name,
        categoryID: req.body.catID
    } 

    try {
        
        await PRODUCT.create(newProduct)
        res.json({message: "Added Successfully!"})
        
    } catch (error) {

        console.log(error);
        res.json({message: "Didn't Added!"})
        
    }


}


//
module.exports = addProduct