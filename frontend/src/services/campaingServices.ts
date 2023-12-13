import axios from "axios";
import { UploadAdapter, FileLoader } from "@ckeditor/ckeditor5-upload/src/filerepository";

const campaignURL = "/campaigns"

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
        )
            return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

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
                            files: file
                        },
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                    resolve({
                        default: `${response.data.filename}`
                    });
                } catch (error) {
                    console.log("error occured");
                    console.log(error);
                    reject(error);
                }
            });
        },
        abort: () => { }
    };
}

