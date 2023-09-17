
import React, { useState, useRef } from "react";
import {useGlobalContext} from '../context'

function SearchList () {
  const {productsData, addToCart} = useGlobalContext()
  const [search, setSearch] = useState("");
  const searchContainerRef = useRef(null);
  const inputRef = useRef(null)

  // useEffect(() => {
  //   const focusInput = () => {
  //     inputRef.current.focus();
  //   }
    
  //   inputRef.current.focus();

  //   const focusInterval = setInterval(focusInput, 1000)

  //   return () => clearInterval(focusInterval)
  // }, [])

  const filterElements = productsData.filter((product) => {
    const { brand, color, category, productName: name } = product;

    const findItem = search;
    return (
      brand.toLowerCase() === findItem.toLowerCase() ||
      color.toLowerCase() === findItem.toLowerCase() ||
      category.toLowerCase() === findItem.toLowerCase() ||
      name.toLowerCase() === findItem.toLowerCase()
    );
  });
  
  const searchedProducts = filterElements.map((product) => {
    const { id, image, brand, category, productName: name, price } = product 
    
    return (
      <div className="cards-container" key={id}>
        <div className="card">
          <div className="card-image">
            <img src={`./images/${image}`} alt={name} loading="lazy"/>
          </div>
          <div className="card-content">
            <h3>Product: {name}</h3>
            <p>Brand: {brand}</p>
            <p>Price: $ {price}</p>
            <p>Category: {category}</p>
            <button type='button' id='addToCart' onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
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
          <button className="close" onClick={() => closeSearchContainer()} aria-label="Close">
            <i className="fa fa-close"></i>
          </button>
        </div>
        <div className="search-list">
          <input
            type="text"
            ref={inputRef}
            placeholder="Search by color, brand or name"
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <i className="fa fa-magnifying-glass"></i>
        </div>
        <div className="search-products">
          {searchedProducts}
        </div>
      </div>
    </div>
  );
}

export default SearchList;


