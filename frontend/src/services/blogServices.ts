import axios from "axios";
import { UploadAdapter, FileLoader } from "@ckeditor/ckeditor5-upload/src/filerepository";

const blogUrl = "/blog"

export const saveBlog = async (blogData: any) => {
    try {
        const response = await axios.post(
            blogUrl,
            JSON.stringify(blogData),
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

export const getBlogs = async (campaignId: any) => {
    try {
        const response = await axios.get(
            blogUrl + "/" + campaignId,
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
