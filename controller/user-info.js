const User=require('./../models/user');

module.exports={
    async signup(ctx){
        let result={
            success:false,
            message:'注册失败'
        };
        const {username,password}=ctx.request.body;
        if(!username||!password){
            result.message='请填写用户名和密码';
            ctx.body=result;
        }else {
            let user=await User.findOne({username});
            if(!user){
                const newUser=new User({
                    username:username,
                    password:password
                });
                const doc=await newUser.save();
                if(!doc.errors){
                    ctx.body={
                        success:true,
                        message:'注册成功'
                    }
                }else{
                    ctx.body=result;
                }
            }else{
                ctx.body={
                    success:false,
                    message:'用户名已存在'
                }
            }
        }
    },

    async signin(ctx){
        let result={
            success:false,
            message:'用户不存在'
        }
        const{username,password}=ctx.request.body;

        await User.findOne({
            username
        },(err,user)=>{
            if(err){
                throw err;
            }
            if(!user){
                ctx.body=result;
            }else{
                if(password===user.password){
                    ctx.body={
                        success:true,
                        message:'登录成功'
                    }
                }else{
                    ctx.body={
                        success:false,
                        message:'密码错误'
                    }
                }
            }
        })

    }
}