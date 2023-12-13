import Campaign from "../models/Campaign.js";
import multer from "multer";
import path from "path";
import campaignModel from "../models/Campaign.js";

// searchAll is a helper service function
export const searchAll = async (params = {}) => {
  const campaigns = Campaign.find(params).exec(); // find() is a model function
  return campaigns;
};

// create is a helper service function
export const create = async (newCampaign) => {
  const campaign = new Campaign(newCampaign);
  return campaign.save(); // save() is a model function
};

// getCampaignByName is a service function to fetch a requested campaign
export const getCampaignByName = async (campaignName) => {
    const campaign = await Campaign.find({ name: campaignName }).populate("owner").exec();
    return campaign
}

// getCampaignById is a service function to fetch a requested campaign by id
export const getCampaignById = async (campaignId) => {
  const campaign = await Campaign.findById(campaignId).exec();
  return campaign;
};

// TESTING: DO NOT TOUCH ###
const storage = multer.diskStorage({
  destination: "../frontend/public/images/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const checkFileType = function (file, cb) {
  //Allowed file extensions
  const fileTypes = /jpeg|jpg|png|gif|svg/;

  //check extension names
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: You can Only Upload Images!!");
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 15000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

export const uploadImages = (request, response) => {
  upload.single("image")(request, response, (err) => {
    if (err) {
      return response.status(500).json({ error: "Error uploading image." });
    }

    if (!request.file) {
      return response.status(400).json({ error: "No image provided." });
    }

    const imagePath = request.file.filename; // This is the filename generated by Multer
    const imageUrl = `../frontend/public/images/${imagePath}`
  });
};

// var ckStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       cb(null, "public/");
//   },
//   filename: function (req, file, cb) {
//       let ext = file.originalname.split(".");
//       ext = ext[ext.length - 1];
//       cb(null, `${Date.now()}.${ext}`);
//   }
// });

// const uploadFile = multer({ storage: storage });
// var corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(upload.array("files"));

export const fileUpload = async (request, response) => {
  try {
    return new Promise((resolve, reject) => {
      upload.any()(request, response, (err) => {
        if (err) {
          reject(err);
        } else {
          if (!request.files || request.files.length === 0) {
            return response.status(400).json({ error: "No image provided." });
          }
      
          const imagePath = request.files[0].filename; // This is the filename generated by Multer
          const filename = `/images/${imagePath}`;
      
          response.status(200).json({ filename });
          resolve();
        }
      });
    });
  } catch (error) {
    return response.status(500).json({ error: "Error uploading image." });
  }
};

//Service to update a campaign
export const updateCampaign = async(campaignId, updatedCampaign) => {
  const campaign = await campaignModel.findByIdAndUpdate(campaignId, updatedCampaign).exec();
  return campaign;
}
