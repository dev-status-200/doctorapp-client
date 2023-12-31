import React, { useState, memo } from "react";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Upload } from "antd";

const UploadProfile = ({ image, saveImg }) => {
  const [imgUrl, setImgUrl] = useState(image);
  const [loading, setLoading] = useState(false);

  const handleChange = async (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", info.file.originFileObj);
      formData.append("upload_preset", "profilePics");
      formData.append("cloud_name", "dwuzocatf");

      try {
        await fetch("https://api.cloudinary.com/v1_1/dwuzocatf/image/upload", {
          method: "post",
          body: formData,
        })
          .then((resp) => resp.json())
          .then((data) => {
            setImgUrl(data.url);
            saveImg("image", data.url);
            setLoading(false);
          });
      } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
      }
      return;
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div>
      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        onChange={handleChange}
      >
        {image != null  ? (
          <Avatar
            src={image}
            alt="avatar"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  );
};

export default memo(UploadProfile);
