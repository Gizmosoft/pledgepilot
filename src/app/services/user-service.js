import User from '../models/User.js'

// create is a helper service function
export const create = async (newUser) => {
    const user = new User(newUser)
    return user.save()     // save() is a model function
}
// find user using id
export const findById = async (id) => {
  const user  = await User.findById(id).exec();
  return user;
}
//find user from query params
export const search = async (params = {}) =>{
  const courses = await User.find(params).exec();
  return courses;
}
//update user by id
export const update = async (updateUser, id) => {
  const user = await User.findByIdAndUpdate(id, updateUser).exec();
  // console.log(user,"service");
  // return user;
}

//remove user
export const remove = async (id) =>{
  try{
    return await User.findByIdAndDelete(id).exec();
  }catch(err){
    console.log(err);
  }
}


//sample user
// {
//   "firstName": "Aaryan",
//   "LastName":"Praveen",
//   "role": "backer",
//   "EmailAddress": "aaryan.praveen@gmail.com",
//   "Location": {
//     "AddressLine1": "24 Boulevard Ter",
//     "city": "Boston",
//     "state": "MA",
//     "pin": "02134"
//       }
//   }

// {
//   "firstName": "Deepansh",
//   "LastName":"Chaturvedi",
//   "role": "creator",
//   "EmailAddress": "deepansh.chaturvedi@gmail.com",
//   "Location": {
//     "AddressLine1": "Coolidge Corner",
//     "city": "Boston",
//     "state": "MA",
//     "pin": "02136"
//       }
//   }