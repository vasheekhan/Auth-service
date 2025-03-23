const express=require("express")
const {PORT}=require("./src/config/serverConfig.js")
const app=express()
const settingUpServer=()=>{
app.listen(PORT,()=>{
    console.log("Server is listening on port 🚀",PORT)
})
}
settingUpServer();