import React from "react";

const RecommendationList = ({ items }) => (
  <div className="space-top">
    <h4>Suggested Outfits</h4>
    <div className="card-list">
      {items.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.imageUrl} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default RecommendationList;
