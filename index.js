const express=require("express")
const bodyParser=require("body-parser")
const {PORT}=require("./src/config/serverConfig.js")
const apiRoutes=require("./src/routes/index.js")
const db=require("./src/models/index")
const {User,Role}=require("./src/models")
const app=express()
const settingUpServer=()=>{
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use("/api",apiRoutes)
app.listen(PORT,async()=>{
    console.log("Server is listening on port 🚀",PORT)
    // if(process.env.DB_SYNC){
    //     db.sequelize.sync({alter:true})
    // }
    // const u1= await User.findByPk(1);
    // const r1=await Role.findByPk(2);
    // u1.addRole(r1)   

})
}
settingUpServer();