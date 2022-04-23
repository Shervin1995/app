var {CATEGORY} = require("../../DataBase")


// -----------------------------
// getCategories
// -----------------------------
async function getCategories(req, res) {

    var categories = await CATEGORY.findAll({})
    res.json(categories)


}

//
module.exports = getCategories