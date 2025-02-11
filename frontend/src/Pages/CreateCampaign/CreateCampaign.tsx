import React, { useState, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  Container,
} from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Editor } from "@ckeditor/ckeditor5-core";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getCampaign, saveCampaign, updateCampaign, uploadAdapter } from "../../services/campaingServices";
import { User } from "../../types/User";
import { updateUserByEmail } from "../../services/userServices";

const CampaignPage = () => {

  const navigate = useNavigate();
  const user = sessionStorage.getItem("user") ?? "";
  const profile = JSON.parse(user);
  const { campaignId } = useParams();

  let ckEditor = {};
  const [campaignDescription, setCampaignDescription] = useState("");
  const [campaignData, setCampaignData] = useState({
    name: "",
    description: "",
    ownerName: profile.firstName + " " + profile.lastName, 
    owner:profile._id,// Use the user's unique ID as the owner
    createdAt: new Date(), // Automatically set the creation date
    community: {
      blogs: [], // Initialize as an empty array for blogs
      comments: [], // Initialize as an empty array for comments
    },
    milestone: {
      target: "", // Target milestone value
      progress: "", // Progress milestone value
    },
    payments: {
      count: "", // Number of payments
    },
  });
  const [loading, setLoading] = useState(false);

  // Function to handle CKEditor changes
  const onChangeInEditor = (event: any, editor: any, name: string) => {
    const data = editor.getData();
    setCampaignData((prev) => ({ ...prev, [name]: data }));
  };

  // Function to fetch existing campaign data for editing
  const fetchCampaign = async (editor: any) => {
    if (campaignId) {
      try {
        const getCampaignResponse = await getCampaign(campaignId);
        setCampaignDescription(getCampaignResponse.description);
        setCampaignData(getCampaignResponse);
        editor.setData(getCampaignResponse.description);
      } catch (error) {
        console.error("Error fetching campaign data:", error);
      }
    }
  };

  // Upload plugin for CKEditor
  function uploadPlugin(editor: Editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader); // Use the provided `uploadAdapter` logic
    };
  }

  // Function to handle form submission
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      let campaign;
      if (!campaignId) {
        campaign = await saveCampaign(campaignData);
      } else {
        campaign = await updateCampaign(campaignId, campaignData);
      }

      profile.createdProjects.push(campaign._id);
      await updateUserByEmail(profile.emailAddress, profile);
      sessionStorage.setItem("user", JSON.stringify(profile));
      navigate("/discover");
    } catch (error) {
      console.error("Error saving campaign:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCampaignData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
        >
          {campaignId ? "Edit Campaign" : "Create Campaign"}
        </Typography>
        <form onSubmit={handleSave}>
          {/* Campaign Title */}
          <TextField
            label="Campaign Title"
            variant="outlined"
            fullWidth
            name="name"
            value={campaignData.name}
            onChange={handleInputChange}
            required
            sx={{ mb: 3 }}
          />

          {/* CKEditor Section - UNTOUCHED */}
          <div className="App ckStyle" style={{width:"100%",height:"100%"}}>
            <CKEditor
              id="textInput"
              editor={ClassicEditor}
              data={campaignDescription}
              config={{
                extraPlugins: [uploadPlugin],
                toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter' ],
              }}
              onReady={(editor: any) => {
                ckEditor = editor;
                fetchCampaign(ckEditor);//TODO
              }}
              onChange={(event: any, ckEditor: { getData: () => any }) => {
                onChangeInEditor(event, ckEditor, "description");
              }}
              onBlur={(event: any, ckEditor: any) => {
              }}
              onFocus={(event: any, ckEditor: any) => {
              }}
            />
          </div>
          <br />

          {/* Save Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              backgroundColor: "#EF476F",
              "&:hover": { backgroundColor: "#D3365E" },
              padding: "10px",
              fontWeight: "bold",
            }}
          >
            {loading ? "Saving..." : "Save Campaign"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CampaignPage;
