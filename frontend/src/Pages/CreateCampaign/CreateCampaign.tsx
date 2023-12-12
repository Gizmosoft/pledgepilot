import React, { useState, useEffect, ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'
// import Editor from '../../Components/Editor/Editor'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import campaignServices from "../../services/campaingServices";
import saveCampaign from '../../services/campaingServices';
import "./CreateCampaign.css"

const CampaignPage = () => {

  const user = sessionStorage.getItem("user") ?? ""
  const profile = JSON.parse(user);
  const [campaignData, saveCampaignData] = useState({
    
    name: "",
    description: "",
    // owner: {
    //   userId: ""
    // },
    owner: profile._id,
    community: {
      comment: {
        id: "",
        body: "",
        owner: ""
      },
      blog: {
        id: "",
        body: "",
        owner: {
          id: ""
        }
      }
    },
    milestone: {
      target: "",
      progress: ""
    },
    payments: {
      count: ""
    }
  });

  let ckEdiorData = {};
  let ckEditor = {};

  const saveData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveCampaign(campaignData);
  };


  const onChangeInEditor = (event: any, editor: any, name: string) => {
    const data = editor.getData()
    ckEdiorData = data;
    saveCampaignData({
      ...campaignData,
      [name]: data,
    })
  }

  const assignValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    saveCampaignData({
      ...campaignData,
      [name]: value,
    });
  }


    return (
      <div className='campaign-page'>
        <div>
          <form className="campaign-form" onSubmit={saveData}>
            <label htmlFor="title">Campaign Title:</label>
            <input
              className="name-input"
              type="text"
              id="name"
              name="name"
              placeholder="Enter Title"
              onChange={assignValue}
              value={campaignData.name}
              required
            />

            <div className="App ckStyle">
              <h2>Enter Campaign Details</h2>
              <CKEditor
                id="textInput"
                editor={ClassicEditor}
                data="<p>Hello from CKEditor&nbsp;5!</p>"
                onReady={(editor: {}) => {
                  ckEditor = editor;
                  // You can store the "editor" and use when it is needed.
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
            <div className="btn-forgot-password">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

export default CampaignPage
function dispatch(arg0: Promise<any>) {
  throw new Error('Function not implemented.');
}

