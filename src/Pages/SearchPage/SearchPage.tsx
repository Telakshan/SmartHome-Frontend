import React, { useEffect, useState } from "react";
import CollectionOfProducts from "../../Components/CollectionOfProducts/CollectionOfProducts";
import Button from "../../Components/Button/Button";
import { useParams, withRouter } from "react-router-dom";
import { History } from "history";

import "./SearchPage.scss";
import axios from "axios";

interface SearchPageProps {
  history: History;
}

const SearchPage: React.FC<SearchPageProps> = ({ history }) => {
  const { name } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/products/search/findByNameContainingIgnoreCase?name=${name}`
      )
      .then((res) => {
        setSearchResults(res.data._embedded.products);
      });
  }, [name]);

  return (
    <div className="search-page">
      {searchResults.length > 0 ? (
        <CollectionOfProducts
          title={`Search Results for "${name}"`}
          items={searchResults}
        />
      ) : (
        
        <div className='grid'>
        <h1>{`We have no products available by the name "${name}"`}</h1>
          <Button inverted={false} onClick={() => history.push("/shop")}>
            Go to shop
          </Button>

        </div>
          
        
      )}
    </div>
  );
};

export default withRouter(SearchPage);
