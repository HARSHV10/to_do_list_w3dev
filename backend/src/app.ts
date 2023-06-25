import express from 'express';
import mongoose from 'mongoose'
import session from "express-session";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();





mongoose.connect(`mongodb+srv://kioken:${process.env.PASSWORD}@cluster0.0gedaos.mongodb.net/todoProj`)



const app = express(); 
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(
  session({
    secret: 'xdfbhfgxbf', // Replace with your own secret key
    resave: false,
    saveUninitialized: true
  })
);
// defining the collection for user data and schema 


/////// making the collection for the user 
const User = mongoose.model("User",new mongoose.Schema({
  userName:String,
  password:String,
  EntryItem:[{
      heading:String,
      subheading:String,
      date:String
  }],
  id:String
}))



//// registration route 
app.post('/register', async (req,res)=>{
  const user_result =await User.findOne({userName:req.body.userName}).then((user)=>{
    return user;
  })
  
    if(!user_result){

      const info = new User({
        userName:req.body.userName,
        password:req.body.password,
        id:req.sessionID,
      })
      await info.save();
      res.send({stat:1});
    }
    else{
      res.send({stat:0})
    }
    

    

})



//login route 

app.post('/login',async (req,res)=>{

// console.log(req.body);

 const user = await User.findOne({userName:req.body.userName}).then(async (user)=>{
  // console.log(user,"hello");
  if(!user|| req.body.password!= user.password){
    if(!user){
      res.send({
        stat:0
      })
    }
    else{
      res.send({
        stat:-1
      })
    }
  }
  else{
    await User.updateOne({userName:req.body.userName},{
      id:req.sessionID
    })
    res.send({
      stat:req.sessionID
    })
   
  }
 })
})




app.post('/dashboard',async (req,res)=>{
const user_result =await User.findOne({id:req.body.location});
if(user_result){
  res.send({
    data:{
      username:user_result.userName,
      list:user_result.EntryItem
    }
  })
}
else{
  res.send({
    data:"no"
  })
}
})

app.patch("/dashboard",async (req,res)=>{
  
  const user_result = await User.findOneAndUpdate(
    {id:req.body.id},{$push:{EntryItem:{heading:req.body.subheading,subheading:req.body.subheading,date:req.body.date}}})
  console.log(user_result);

})
app.put("/dashboard",async (req,res)=>{
  
  const user_result = await User.findOneAndUpdate(
    {id:req.body.id},{$pull:{EntryItem:{heading:req.body.subheading,subheading:req.body.subheading}}})
  console.log(user_result);

})



app.listen(3000,()=>{
    console.log("connected to port",3000)
})