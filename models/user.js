
const mongoose=require("mongoose");
const Scheme=mongoose.Schema;
const UserScheme=new Scheme({
    username:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

module.exports=mongoose.model('User',UserScheme)