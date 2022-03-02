import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetails() {
  const [items, setItems] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
      // fetch('http://localhost:3001/api/scraper')
      fetch('https://tartine-scraper-api.main.benchan.tech/api/scraper')
      .then(res => res.json())
      .then(result => setItems(result))
      .catch(err => console.log(err));
  }, []);

  if (items === null) {
    return null;
  } else {
    return (
      <div className='ItemDetails'>
        <img
          src={"https://static.bbot.menu" + items[id]['imageUrl']}
          alt={items[id]['name_for_customer']}
        />
        <h2>Name: {items[id]['name_for_customer']}</h2>
        <div>Description: {items[id]['description']}</div>
        <div>Price: {items[id]['price_string']}</div>
        <div>Stock: {items[id]['in_stock'] ? 'In Stock' : 'Out of Stock'}</div>
      </div>
    );
  }
}

export default ItemDetails;
