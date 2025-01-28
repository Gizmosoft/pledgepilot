import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dsymhipwi",
  api_key: "824125394139844",
  api_secret: "dZfrJ_ZLdHSNGpUgVgh2DYIHop0",
});

export const cloudImage = cloudinary.uploader.upload(
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" },
  function (error, result) {}
);
