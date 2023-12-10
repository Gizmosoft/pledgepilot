import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Editor from '../../Components/Editor/Editor'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import campaignServices from "../../services/campaingServices";
import saveCampaign from '../../services/campaingServices';

const CampaignPage = () => {

  const [campaignData, setCampaignData] = useState({
    name: "",
    description: "",
    owner: "",
    community: "",
    milestone: "",
    payments: ""
  });

  const saveCampaignData = () => {
      saveCampaign(campaignData);
  };

  let ckEditor = {};

  const onChangeInEditor = (event: any, editor: any) => {
    const data = editor.getData()
    setCampaignData({
      name: 'abc',
      description: data,
      owner: 'Abc',
      community: "test",
      milestone: '',
      payments: ''
    })
  }

  return (
    <div className='campaign-page'>
      <p>We are on the campaign page... It will be updated soon!</p>
      <div>
        <div className="App">
          <h2>Using CKEditor&nbsp;5 build in React</h2>
          <CKEditor
            id="textInput"
            editor={ClassicEditor}
            data="<p>Hello from CKEditor&nbsp;5!</p>"
            onReady={editor => {
              ckEditor = editor;
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, ckEditor) => {
              console.log(event);
              console.log(ckEditor.getData());
              onChangeInEditor(event, ckEditor);
            }}
            onBlur={(event, ckEditor) => {
              console.log('Blur.', ckEditor);
            }}
            onFocus={(event, ckEditor) => {
              console.log('Focus.', ckEditor);
            }}
          />
          <div className="btn-forgot-password">
            <button type="submit" onClick={saveCampaignData}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignPage
