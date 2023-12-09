export const setResponse = ({ type, data }, response) => {
  if (type == "LOGIN") {
    response
      .status(200)
      .cookie("jwt", data, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
      .json(data);
    // name(of the cookies) , refreshtoken,Options
  } 
//   else if(type == "SEARCH_BY_EMAILID"){
//     response.status(200).json(data)
//   }
  else {
    console.log(data,"user data")
    response.status(200).json(data);
  }
};

export const setErrorResponse = (error, response) => {
  response.status(500).json({
    code: "ServiceError",
    message: error.message,
  });
};
