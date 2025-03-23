const express=require("express")
const bodyParser=require("body-parser")
const {PORT}=require("./src/config/serverConfig.js")
const apiRoutes=require("./src/routes/index.js")
const app=express()
const settingUpServer=()=>{
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use("/api",apiRoutes)
app.listen(PORT,()=>{
    console.log("Server is listening on port 🚀",PORT)
})
}
settingUpServer();