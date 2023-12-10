import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const verifyJWT = (req,res,next)=>{
  console.log(req);
  const authHeader = req.headers["authorization"];
  if(!authHeader){
    return res.sendStatus(401);
  }
  const token = authHeader.split(' ')[1];
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err,decoded)=>{
      if(err) return res.sendStatus(403);
      req.user = decoded.user;
      next();
    }
  )
}

export default verifyJWT;