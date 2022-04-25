var {CATEGORY} = require("../../DataBase")


// -----------------------------
// getCategories
// -----------------------------
async function addCategory(req, res) {

    try {
        
        await CATEGORY.create({
            id: await CATEGORY.max('id', {}) + 1,
            title: req.body.the_title 
        })

        res.json({message: "category added!"})
        
    } catch (error) {

        console.log(error);
        res.json({message: "category NOT added!"})

    }


}

//
module.exports = addCategory