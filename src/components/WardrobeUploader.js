import React, { useState } from "react";

const WardrobeUploader = () => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    alert("File uploaded (simulated)!");
  };

  return (
    <div className="space-top">
      <h3>Upload Your Outfit</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default WardrobeUploader;
