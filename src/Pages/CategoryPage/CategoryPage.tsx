import { useState, useEffect } from "react";
import CollectionOfProducts from "../../Components/CollectionOfProducts/CollectionOfProducts";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./CategoryPage.scss";

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  let id: number;
  let categoryName: string;

  switch (categoryId) {
    case "security":
      id = 4;
      categoryName = 'Security cameras and Surveillance'
      break;

    case "lighting":
      id = 2;
      categoryName = 'Lighting'
      break;

    case "kitchen":
      id = 3;
      categoryName = 'Kitchen and Laundry'
      break;

    case "speakers":
      id = 1;
      categoryName = 'Speakers and Displays'
      break;

    default:
      id = 1;
      categoryName = 'Speakers and Displays'
  }



  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/products/search/findByCategoryId?id=${id}`
      )
      .then((res) => {
        setCategoryProducts(res.data._embedded.products);
      });
  }, [id]);


  return (
    <div className="category-page">
      <CollectionOfProducts title={categoryName} items={categoryProducts} />
    </div>
  );
};

export default CategoryPage;
