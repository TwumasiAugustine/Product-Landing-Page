
import React, { useState, useRef, useEffect } from "react";
import data from "./product.json";

function SearchList() {
  const [search, setSearch] = useState("");
  const [products] = useState(data);
  const searchContainerRef = useRef(null);
  const inputRef = useRef(null)

  const filterElements = products.filter((listElement) => {
    const findItem = search;
    return (
      listElement.brand.toLowerCase() === findItem.toLowerCase() ||
      listElement.color.toLowerCase() === findItem.toLowerCase() ||
      listElement.category.toLowerCase() === findItem.toLowerCase() ||
      listElement.productName.toLowerCase() === findItem.toLowerCase()
    );
  });

  const listItems = filterElements.map((listElement) => {
    return (
      <li key={listElement.id}>
        <a
          href="#"
          onClick={() => {
            closeSearchContainer();
            window.location.hash = `#${listElement.color}-${listElement.brand}-${listElement.productName}`;
          }}
        >
          {listElement.brand} {listElement.color} 
        </a>
      </li>
    );
  });

  const closeSearchContainer = () => {
    searchContainerRef.current.classList.remove("searchOpen");
  };
  return (
    <div className="search-container" ref={searchContainerRef}>
      <div className="transparent-side"></div>
      <div className="search-side">
        <div className="search">
          <h3>Search our Site</h3>
          <button className="close" onClick={() => closeSearchContainer()}>
            X
          </button>
        </div>
        <div className="search-list">
          <input
            type="text"
            ref={inputRef}
            placeholder="Search by color, brand or name"
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="fa fa-magnifying-glass"></i>
        </div>
        <div className="list-items">
          <ul>{listItems}</ul>
        </div>
      </div>
    </div>
  );
}

export default SearchList;


