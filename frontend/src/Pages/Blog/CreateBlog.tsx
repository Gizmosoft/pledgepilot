import React, { useState, ChangeEvent } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Editor } from "@ckeditor/ckeditor5-core";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {uploadAdapter} from "../../services/campaingServices";
import {saveBlog} from "../../services/blogServices";
 import "./CreateBlog.css"

const CreateBlog = () => {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("user") ?? "";
  const profile = JSON.parse(user);

  const [blogData, saveBlogData] = useState({
    blogTitle: "",
    blogDescription: "",
    owner: profile._id,
    campaignID: "6575c614b00a5e74cc660250"
  });

  let ckEdiorData = {};
  let ckEditor = {};
  const duration = 4000;
  const [openSnackbar, setopenSnackbar] = useState(false)

  const  saveData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(blogData);
    const savedBlogData = await saveBlog(blogData);
    console.log(savedBlogData._id);
    //console.log(user);
    setopenSnackbar(true);
    setTimeout(()=>{
      navigate("/discover");
    },duration);
  };

  const onChangeInEditor = (event: any, editor: any, name: string) => {
    const data = editor.getData();
    ckEdiorData = data;
    saveBlogData({
      ...blogData,
      [name]: data,
    });
  };

  const assignValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    saveBlogData({
      ...blogData,
      [name]: value,
    });
  }
  function uploadPlugin(editor: Editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <div className="blog-page">
      <div>
        <form className="blog-form" onSubmit={saveData}>
          <label htmlFor="title">Blog Title:</label>
          <input
            className="name-input"
            type="text"
            id="blogTitle"
            name="blogTitle"
            placeholder="Enter Title"
            onChange={assignValue}
            value={blogData.blogTitle}
            required
          />

            <div className="App ckStyle">
              <CKEditor
                id="textInput"
                editor={ClassicEditor}
                data="<p>Hello from CKEditor&nbsp;5!</p>"
                config={{
                  extraPlugins: [uploadPlugin]
                }}
                onReady={(editor: {}) => {
                  ckEditor = editor;
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event: any, ckEditor: { getData: () => any; }) => {
                  onChangeInEditor(event, ckEditor, "description");
                }}
                onBlur={(event: any, ckEditor: any) => {
                }}
                onFocus={(event: any, ckEditor: any) => {
                }}
              />
            </div>
            <br/>
            <div className="btn-forgot-password">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

export default CreateBlog;
function dispatch(arg0: Promise<any>) {
  throw new Error("Function not implemented.");
}
