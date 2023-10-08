/* eslint-disable react/prop-types */
import { useState } from "react";

import "./SearchFilter.css";

const SearchFilter = (props) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // Call the callback function to send data to the parent
    props.sendDataToParent(newQuery);
  };

  return (
    <div className="search-filter">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleQueryChange}
      />
    </div>
  );
};

export default SearchFilter;
