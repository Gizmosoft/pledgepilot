import React, { useState } from 'react'

export const ImageUploader = () => {
    const [formData, setFormData] = useState({
        image: null, // Store the selected image file
      });

      const handleFileChange = (e:any) => {
        setFormData({
          ...formData,
          image: e.target.files[0], // Assuming a single file upload, you may modify this for multiple files
        });
      };

      const handleSubmit = async (e:any) => {
        e.preventDefault();
    
        const { image }:any = formData;
    
        // Create a FormData object to handle file uploads
        const formDataObject = new FormData();
        formDataObject.append('image', image);
    
        try {
          const response = await fetch('http://localhost:3001/campaigns/upload', {
            method: 'POST',
            body: formDataObject,
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          // Handle the response data, if needed
          const data = await response.json();
          console.log(data);
        } catch (error:any) {
          console.error('There was a problem with the fetch operation:', error.message);
        }
      };
  return (
    <div>
        <h1>Upload Image</h1>
        <form onSubmit={handleSubmit}>
      <label>
        Image:
        <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
      </label>
      <br />
      <button type="submit">Upload</button>
    </form>
    </div>
  )
}
