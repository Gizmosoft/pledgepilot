import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import Editor from '../../Components/Editor/Editor'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import campaignServices from "../../services/campaingServices";
import saveCampaign from "../../services/campaingServices";
import "./CreateCampaign.css";
import { CustomSnackbar } from "../../Components/Snackbar/CustomSnackbar";

const CampaignPage = () => {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("user") ?? "";
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

  let ckEdiorData = {};
  let ckEditor = {};
  const duration = 4000;
  const [openSnackbar, setopenSnackbar] = useState(false)

  const  saveData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(campaignData);
    const campaign = await saveCampaign(campaignData);
    // console.log(campaign._id);
    console.log(user);
    setopenSnackbar(true);
    setTimeout(()=>{
      navigate("/discover");
    },duration);
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
  };

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
            <h2>Enter Campaign Details</h2>
            <CKEditor
              id="textInput"
              editor={ClassicEditor}
              data="<p>Hello from CKEditor&nbsp;5!</p>"
              onReady={(editor: {}) => {
                ckEditor = editor;
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event: any, ckEditor: { getData: () => any }) => {
                onChangeInEditor(event, ckEditor, "description");
              }}
              onBlur={(event: any, ckEditor: any) => {}}
              onFocus={(event: any, ckEditor: any) => {}}
            />
          </div>
          <div className="btn-forgot-password">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
      <CustomSnackbar duration={duration} open={openSnackbar} message={"created campaign"} />
    </div>
  );
};

export default CampaignPage;
function dispatch(arg0: Promise<any>) {
  throw new Error("Function not implemented.");
}
