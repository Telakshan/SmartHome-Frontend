import { withRouter } from "react-router-dom";

import "./Categories.scss";

const Categories = ({ name, imageUrl, linkUrl, match, history }) => {
  return (
      <div
        className="category-item"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={() => history.push(`shop/${linkUrl}`)}
      >
        <div className="category-item-inner">
          <div>{name}</div>
        </div>
      </div>
  );
};

export default withRouter(Categories);
