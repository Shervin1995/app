var Sequelize = require("sequelize")
 

// var db = "juniorDB"
// var user = "juniorUSER"
// var pass = "JuniorUSER" 
// var url = `postgres://${user}:${pass}@localhost:5432/${db}`

var url = "postgres://gozfahxwgggrxu:dc70b5b836f58443abece1b070024582b8047f276a3d9cec4520fe093f8d4ddf@ec2-3-218-171-44.compute-1.amazonaws.com:5432/d4o819kshos9cv"
 
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