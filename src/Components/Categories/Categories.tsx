import React from "react";

import './Categories.scss';

const Categories = ({name, imageUrl}) => {
  return (
    <div className="category-item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="category-item-inner">
        <div>
            {name}
        </div>
      </div>
    </div>
  );
};

export default Categories;
