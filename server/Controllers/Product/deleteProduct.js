var {PRODUCT} = require("../../DataBase")

// -----------------------------
// DELETE
// -----------------------------
async function deleteProduct(req, res) {

    var the_id =  req.body.theID
    

    try {
        
        await PRODUCT.destroy({
            where: {id: the_id}
        })

        res.json({message: "Success delete!"})

    } catch (error) {

        console.log(error);
        res.json({message: "Not Deleted!"})
        
    }
 

}

//
module.exports = deleteProduct
