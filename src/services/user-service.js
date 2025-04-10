const UserRepository=require("../repository/user-repository.js")
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
}
module.exports=UserService;