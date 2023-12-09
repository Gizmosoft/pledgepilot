import React from 'react'
import { cloudImage } from '../../Components/Tests/CloudinaryTests'

const Cloudinary = () => {
    const imgUrl = cloudImage
    console.log(imgUrl);
    
  return (
    <div>
      {/* <img src="" alt="" /> */}
      <h1>Hello!</h1>
    </div>
  )
}

export default Cloudinary
