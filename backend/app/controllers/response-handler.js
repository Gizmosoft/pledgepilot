export const setResponse = ({ type, data }, response) => {
  if (type == "LOGIN") {
    response
      .status(200)
      .cookie("jwt", data.refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
      .json(data);
  } 

  else {
    response.status(200).json(data);
  }
};

export const setErrorResponse = (error, response) => {
  console.log(error.message,"error message");
  response.status(500).json({
    code: "ServiceError",
    message: error.message,
  });
};
