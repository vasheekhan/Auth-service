const UserService=require("../services/user-service.js")
const userService=new UserService();
const create=async(req,res)=>{
try {
    const response=await userService.create({
        email:req.body.email,
        password:req.body.password
    })
    return res.status(201).json({
        success:true,
        message:"Successfully created a new user",
        data:response,
        
    })
} catch (error) {
   console.log(error);
   return res.status(500).json({
    message:"Something went wrong ",
    data:{},
    success:false,
    err:error.message
   }) 
}
}
const signIn=async(req,res)=>{
    try {
      const response=await userService.signIn(req.body.email,req.body.password);
      console.log("response",response);
      return res.status(200).json({
        success:true,
        message:"successfully sigin a user",
        data:response
      })  
    } catch (error) {
        console.log(error);
        return res.status(500).json({
         message:"Something went wrong ",
         data:{},
         success:false,
         err:error.message,
         error:error,
        })   
    }
}
const isAuthenticated=async(req,res)=>{
    try {
        const token=req.headers["x-access-token"];
        const response=await userService.isAuthenticated(token);
        return res.status(200).json({
            success:true,
            err:{},
            data:response,
            message:"user is authenticated and token is valid"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
         message:"Something went wrong ",
         data:{},
         success:false,
         err:error  
        })
}
}
module.exports={
    create,
    signIn,
    isAuthenticated
}