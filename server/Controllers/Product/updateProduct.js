var {PRODUCT} = require("../../DataBase")




// -----------------------------
// UPDATE
// -----------------------------
async function updateProduct(req, res) {

    var theID = req.body.theID
    var name = req.body.name


    try {
        
        await PRODUCT.update({
            name: name
         }, {
             where: {id: theID}
         })


        res.json({message: "update success!"})


    } catch (error) {

        console.log(error);
        res.json({message: "update failed!"})
        
    }


     


}


//
module.exports = updateProduct