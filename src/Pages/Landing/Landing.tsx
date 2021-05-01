import React from "react";

import Categories from "../../Components/Categories/Categories";

import "./Landing.scss";

import CATEGORIES_DUMMY from "./Assets/CATEGORIES_DUMMY";

const Landing = () => {
  return (
    <div className="landing">
      <div className="categories">
        {CATEGORIES_DUMMY.map(({id, name, imageUrl}) => (
          <Categories key={id} name={name} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
