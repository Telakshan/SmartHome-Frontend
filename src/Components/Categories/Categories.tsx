import { withRouter } from "react-router-dom";
import { History } from "history";

import "./Categories.scss";

interface CategoriesProps {
  name: string;
  imageUrl: string;
  linkUrl: string;
  history: History;
}

const Categories: React.FC<CategoriesProps> = ({
  name,
  imageUrl,
  linkUrl,
  history,
}) => {
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
