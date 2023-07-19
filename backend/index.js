import express from 'express';
import mongoose from "mongoose";
import cors from 'cors'
const app=express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const db='mongodb+srv://root:root@cluster0.vtuxsrh.mongodb.net/whatsapp?retryWrites=true&w=majority'

mongoose.connect(db).then(()=>{
    console.log(`connected`)
}).catch((err)=>{
    console.log(err)
})
const userSchama=new mongoose.Schema({
    name:String,
    phone:String
})

const User=mongoose.model("users",userSchama)

app.post("/Login",(req,res)=>{
    console.log(req.body)
    const {name,phone}=req.body
    User.findOne({phone:phone},(err,user)=>{
        if (user) {
            res.send({massage:"done",user:user})
        } else {
            const user=new User(
                {
                    name,
                    phone
                }
            )
            user.save((err)=>
            {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ massage: "Successfully Register", user })
                }
            });
        }
    })
})


app.listen(8082,()=>{
    console.log(`connection start at 8082`)
})