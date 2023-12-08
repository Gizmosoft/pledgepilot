import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const verifyJWT = (req,res,next)=>{
  const authHeader = req.header["authorization"];
  if(!authHeader){
    return res.sendStatus(401);
  }
  console.log(authHeader)
  const token = authHeader.split(' ')[1];
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err,decoded)=>{
      if(err) return res.sendStatus(403);
      req.user = decoded.username;
      next();
    }
  )
}

export default verifyJWT;