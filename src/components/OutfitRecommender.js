import React, { useState } from "react";
import RecommendationList from "./RecommendationList";

const OutfitRecommender = () => {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = () => {
    setRecommendations([
      { id: 1, name: "Elegant Blazer", imageUrl: "https://via.placeholder.com/100" },
      { id: 2, name: "Slim-fit Jeans", imageUrl: "https://via.placeholder.com/100" },
      { id: 3, name: "White Sneakers", imageUrl: "https://via.placeholder.com/100" }
    ]);
  };

  return (
    <div className="space-top">
      <h3>Get Outfit Suggestions</h3>
      <button onClick={fetchRecommendations}>Recommend</button>
      <RecommendationList items={recommendations} />
    </div>
  );
};

export default OutfitRecommender;
