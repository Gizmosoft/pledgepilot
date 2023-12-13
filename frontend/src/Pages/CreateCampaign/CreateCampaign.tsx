import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import Editor from '../../Components/Editor/Editor'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Editor } from "@ckeditor/ckeditor5-core";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { saveCampaign, updateCampaign, uploadAdapter } from "../../services/campaingServices";
import "./CreateCampaign.css"

const CampaignPage = () => {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("user") ?? "";
  const profile = JSON.parse(user);
  const { campaignId } = useParams()
  let ckEdiorData= {};
  let ckEditor = {};
  let campaignDescription = "";



  const [campaignData, saveCampaignData] = useState({
    name: "",
    description: "",
    owner: profile._id,
    community: {
      comment: {
        id: "",
        body: "",
        owner: "",
      },
      blog: {
        id: "",
        body: "",
        owner: {
          id: "",
        },
      },
    },
    milestone: {
      target: "",
      progress: "",
    },
    payments: {
      count: "",
    },
  });


  const duration = 4000;
  const [openSnackbar, setopenSnackbar] = useState(false)

  const saveData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(campaignData);
    if(campaignId == undefined)
    {
      const campaign = await saveCampaign(campaignData);
    }
    else{
      const campaign = await updateCampaign(campaignId, campaignData);
    }
    // console.log(campaign._id);
    console.log(user);
    setopenSnackbar(true);
    setTimeout(() => {
      navigate("/discover");
    }, duration);
  };

  const onChangeInEditor = (event: any, editor: any, name: string) => {
    const data = editor.getData();
    ckEdiorData = data;
    saveCampaignData({
      ...campaignData,
      [name]: data,
    });
  };

  const assignValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    saveCampaignData({
      ...campaignData,
      [name]: value,
    });
  }
  function uploadPlugin(editor: Editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  const fetchCampaign = (editor: any) => {
    if (campaignId != undefined) {
      const campaignResponse = fetch('http://localhost:3001/campaigns/campaign/' + campaignId).then(
        async function(result) {
          const campaignData = await result.json()
          console.log(campaignData);
          campaignDescription = campaignData.description;
          console.log(campaignDescription)
          editor.setData(campaignDescription);
          saveCampaignData(campaignData);
        }
      )
      // get campaign Data
    }
  }



  return (
    <div className="campaign-page">
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
            <h2>Using CKEditor&nbsp;5 build in React</h2>
            <CKEditor
              id="textInput"
              editor={ClassicEditor}
              data= {campaignDescription}
              config={{
                extraPlugins: [uploadPlugin]
              }}
              onReady={(editor: {}) => {
                ckEditor = editor;
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
                fetchCampaign(ckEditor);
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
          <br />
          <div className="btn-forgot-password">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CampaignPage;
function dispatch(arg0: Promise<any>) {
  throw new Error("Function not implemented.");
}
