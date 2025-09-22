import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import connection  from './database/db.js';
import  morgan from 'morgan';
import  helmet from 'helmet';
import multer from 'multer';
import path from 'path';

import useRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import noteroute from './routes/notes.js';
import commentroute from './routes/comment.js'
import conversationroute from './routes/conversation.js'
import messageroute from './routes/message.js'
 
import cors from 'cors';
const app=express();
dotenv.config();

const port=process.env.PORT ||8000;
 
const URL=process.env.URL;
 
connection(URL);

 
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache'); // For HTTP/1.0 clients
  res.set('Expires', '0'); // For older clients
  next();
});
 
app.use(cors({
  origin:"*",
  methods: ['GET','POST','DELETE','UPDATE','PUT'],
  allowedHeaders:['Content-Type', 'Authorization','sessionId'],
  exposedHeaders:['sessionId'],
  preflightContinue:false
}));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
 
const __dirname = path.resolve();
app.use("/images", express.static(path.join(__dirname, "public/images"), {
  setHeaders: function(res, path) {
    res.set("Cross-Origin-Resource-Policy","cross-origin");
  }
}));

app.use('/api/users',useRoute);
app.use('/api/auth',authRoute);
app.use('/api/notes',noteroute);
app.use('/api/comments',commentroute);
app.use('/api/conversations',conversationroute);
app.use('/api/messages',messageroute);


app.get("/",(req,res)=>{
    res.send("welcome to home page"); 
})
app.listen(port,()=>console.log(`listening on port at ${port}`));