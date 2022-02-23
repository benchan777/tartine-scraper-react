import React, { useEffect } from "react";
import { useState } from "react";
import MenuItems from "../MenuItems/MenuItems";
import './MenuData.css';

function MenuData() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/scraper')
      .then(res => res.json())
      .then(result => {
        setItems(result);
      }, error => {
        console.log(error);
      });
  }, []);

  if (items === null) {
    return null;
  } else {
    const data = Object.keys(items).map(key => {

      return (
        <MenuItems
          id={key}
          key={items[key]['name_for_customer']}
          name={items[key]['name_for_customer']}
          stock={items[key]['in_stock'] ? 'In Stock' : 'Out of Stock'}
          image={items[key]['integrations']['external_image_url']}
        />
      );
    });

    return (
      <div className="MenuData">
        {data}
      </div>
    );
  }
}

export default MenuData;
