var Sequelize = require("sequelize")


var db = "juniorDB"
var user = "juniorUSER"
var pass = "JuniorUSER" 
var url = `postgres://${user}:${pass}@localhost:5432/${db}`

//
const sequelize = new Sequelize(url, {logging: false})

sequelize.sync()


// ---------------------------------
// CATEGORY Model 
// ---------------------------------
const CATEGORY = sequelize.define('Category', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: Sequelize.STRING
},{
    timestamps: false
})

// ---------------------------------
// PRODUCT Model 
// ---------------------------------
const PRODUCT = sequelize.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING
},{
    timestamps: false
})

PRODUCT.belongsTo(CATEGORY, {foreignKey: "categoryID"})



// ---------------------------------
//  export
// ---------------------------------
var MODEL = {CATEGORY, PRODUCT}


module.exports = MODEL