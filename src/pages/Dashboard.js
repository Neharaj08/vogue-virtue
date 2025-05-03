import React, { useState } from 'react';
import '../Dashboard.css';

const Dashboard = () => {
  const [outfits, setOutfits] = useState([]);
  const [matches, setMatches] = useState([]);
  const [similarItems, setSimilarItems] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (outfits.length + files.length > 100) {
      alert("You can upload up to 100 images.");
      return;
    }
    setOutfits([...outfits, ...files]);
  };

  const generateMatches = () => {
    const matchCount = Math.floor(outfits.length / 3);
    const newMatches = [];
    for (let i = 0; i < matchCount; i++) {
      newMatches.push({
        top: outfits[i * 3],
        bottom: outfits[i * 3 + 1],
        footwear: outfits[i * 3 + 2],
      });
    }
    setMatches(newMatches);
  };

  const handleSimilarItems = (selectedImage) => {
    const filtered = outfits.filter((img) => img !== selectedImage);
    const randomItems = filtered.slice(0, 6);
    setSimilarItems(randomItems);
  };

  return (
    <div className="dashboard">
      <h2>Upload Outfits</h2>
      <div className="upload-section">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
        <button onClick={generateMatches} className="generate-btn">
          Generate Outfit Matches
        </button>
      </div>
      <p>{outfits.length} / 100 images uploaded</p>

      <div className="section uploaded-section">
        <h3>Uploaded Outfits</h3>
        <div className="uploaded-grid">
          {outfits.map((file, index) => (
            <div key={index} className="image-box">
              <img
                src={URL.createObjectURL(file)}
                alt={`uploaded-${index}`}
                onClick={() => handleSimilarItems(file)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="section matched-section">
        <h3>Matched Outfits</h3>
        <div className="match-grid">
          {matches.map((match, idx) => (
            <div key={idx} className="match-row">
              <div
                className="image-box"
                onClick={() => handleSimilarItems(match.top)}
              >
                <p>Top</p>
                <img src={URL.createObjectURL(match.top)} alt="top" />
              </div>
              <div
                className="image-box"
                onClick={() => handleSimilarItems(match.bottom)}
              >
                <p>Bottom</p>
                <img src={URL.createObjectURL(match.bottom)} alt="bottom" />
              </div>
              <div
                className="image-box"
                onClick={() => handleSimilarItems(match.footwear)}
              >
                <p>Footwear</p>
                <img src={URL.createObjectURL(match.footwear)} alt="footwear" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section similar-items-section">
        <h3>Similar Items</h3>
        <div className="similar-grid">
          {similarItems.length === 0 ? (
            <p>Click an outfit above to see similar items.</p>
          ) : (
            similarItems.map((item, index) => (
              <div key={index} className="image-box">
                <img src={URL.createObjectURL(item)} alt={`similar-${index}`} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
