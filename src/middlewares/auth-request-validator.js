const validateUserAuth=(req,res,next)=>{
    if(!req.body.email || !req.body.password){
return res.status(500).json({
    success:false,
    data:{},
    message:"Somethingwent wrong ",
    error:"email and password is missing"
})
 }
 next();
}
const validateIsAdminRequest=(req,res,next)=>{
    if(!req.body.id){
    return res.status(400).json({  //{return} Cannot set headers after they are sent to the client
        success:false,
        data:{},
        err:"User id is not given",
        message:"Something went wrong"
      })
    }
    next();
}

module.exports={
    validateUserAuth,
    validateIsAdminRequest
}