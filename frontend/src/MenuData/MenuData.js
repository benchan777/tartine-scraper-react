import React, { useEffect } from "react";
import { useState } from "react";
import ItemDetails from "../ItemDetails/ItemDetails";
import './MenuData.css';

function MenuData() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/scraper')
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true);
        setItems(result);
      }, error => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  const data = Object.keys(items).map(key => {
    const name = items[key]['name_for_customer'];
    const description = items[key]['description'];
    const image = items[key]['integrations']['external_image_url'];
    let stock;

    if (items[key]['in_stock'] === true) {
      stock = 'In Stock'
    } else {
      stock = 'Out of Stock'
    }

    return(
      <ItemDetails
        key = {name}
        name = {name}
        description = {description}
        stock = {stock}
        image = {image}
      />
    )
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='MenuData'>
        {data}
      </div>
    );
  }
}

export default MenuData;
