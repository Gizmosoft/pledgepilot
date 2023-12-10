import User from "../models/User.js";
import { findByRefreshToken } from "../services/user-service.js";

export const handleLogout = async (request, response) => {
  try {
      const cookies = request.cookies;
      if(!cookies?.jwt) return response.sendStatus(204);
      const refreshToken = cookies.jwt;

      //is refreshtoken in the db
      const foundUserByToken = await findByRefreshToken(refreshToken);
      if(!foundUserByToken) {
        response.clearCookie('jwt',{httpOnly:true})
        return response.sendStatus(204);
      }
      //Delete the refreshtokenin db
      const foundUser =  new User(foundUserByToken);
      foundUser.refreshToken = "";
      foundUser.save();  
      response.clearCookie("jwt",{httpOnly: true});
      response.sendStatus(204);
  } catch (error) {
      setErrorResponse(error, response);
  }
}