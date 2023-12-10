import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { findByRefreshToken } from "../services/user-service.js";
dotenv.config();

export const handleRefreshToken = async (request, response) => {
  try {
      const cookies = request.cookies;
      if(!cookies?.jwt) return response.sendStatus(401);
      const refreshToken = cookies.jwt;
      const foundUser = await findByRefreshToken(refreshToken);
      if(!foundUser) return response.sendStatus(403);

      //evaluate jwt
      jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,decoded)=>{
        if(err) return response.sendStatus(403);
        const accessToken = jwt.sign({
          user: foundUser.emailAddress,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "30s",
        })
        response.json({accessToken});
      });
      
      // setResponse(x, response);        
  } catch (error) {
      setErrorResponse(error, response);
  }
}