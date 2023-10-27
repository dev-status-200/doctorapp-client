import React,{memo} from "react";

function UploadFile({ index, setUploadedImgURL }) {
  const uploadToCloudinary = async (e) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "profilePics");
    formData.append("cloud_name", "dwuzocatf");

    try {
      await fetch('https://api.cloudinary.com/v1_1/dwuzocatf/image/upload', {
        method: "post",
        body: formData,
      })
        .then((resp) => resp.json())
        .then((data) => {
          setUploadedImgURL(data.url, index);
        });
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    }
  };

  return (
    <label className="upload-container p-5">
      <input
        style={{ display: "none" }}
        type="file"
        onChange={uploadToCloudinary}
      />
      <div className="upload-btn">
        <span className="plus-icon">+</span>
        Click here to upload Images or Video
      </div>
    </label>
  );
}

export default  memo(UploadFile);
