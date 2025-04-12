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

module.exports={
    validateUserAuth
}