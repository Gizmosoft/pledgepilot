import axios from "axios";
import {
  UploadAdapter,
  FileLoader,
} from "@ckeditor/ckeditor5-upload/src/filerepository";

const campaignURL = "/campaigns";

export const getCampaign = async (campaignId: any) => {
  try {
    const response = await axios.get(`${campaignURL}/campaign/${campaignId}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPaymentInfo = async (campaignId: any) => {
  try {
    const response = await axios.get(`campaignpayments/${campaignId}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveCampaign = async (campaignData: any) => {
  try {
    const response = await axios.post(
      campaignURL + "/create",
      JSON.stringify(campaignData),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadAdapter = (loader: FileLoader): UploadAdapter => {
  return {
    upload: () => {
      return new Promise(async (resolve, reject) => {
        try {
          const file = await loader.file;
          const response = await axios.request({
            method: "POST",
            url: campaignURL + `/upload`,
            data: {
              files: file,
            },
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          resolve({
            default: `${response.data.filename}`,
          });
        } catch (error) {
          console.log(error);
          reject(error);
        }
      });
    },
    abort: () => {},
  };
};

export const updateCampaign = async (campaignId: any, campaignData: any) => {
  try {
    const response = await axios.patch(
      campaignURL + "/update/" + campaignId,
      JSON.stringify(campaignData),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const makePaymentService = async (payment: any) => {
  try {
    const response = await axios.post("/payments", JSON.stringify(payment), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const createPayments = async (payment: any) => {
  try {
    const response = await axios.post(
      "/payments/create",
      JSON.stringify(payment),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getMilestones = async (campaignId: any) => {
  try {
    const response = await axios.get(`/milestones/${campaignId}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadCampaignImage = async (formData: any) => {
  try {
    const response = await axios.post("/upload", JSON.stringify(formData), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
