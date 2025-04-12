const UserRepository=require("../repository/user-repository.js")
const {JWT_KEY}=require("../config/serverConfig.js")
const jwt=require("jsonwebtoken");
const validator=require("validator")
class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }
    async create(data){
        try {
            console.log("data"+data.password);
           const  isEmailValid=validator.isEmail(data.email);
           const  isPasswordValid=validator.isStrongPassword(data.password);
           if(!isEmailValid || !isPasswordValid){
            throw new Error("invalid email and password");
           }
const user=await this.userRepository.create(data);
            return user;
        } catch (error) {
           console.log("something went wrong in user service");
           throw error; 
        }
    }
     createToken(user){
try {
    const result=jwt.sign(user,JWT_KEY,{expiresIn:"1h"});
    return result;
} catch (error) {
    console.log("something went wrong in token creation")
    throw error;
}
    }
    verifyToken(token){
        try {
            const response=jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("something went wrong in token verification")
            throw error;
        }
            }
 
}
module.exports=UserService;