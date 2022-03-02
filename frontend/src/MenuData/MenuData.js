import React, { useEffect, useState } from "react";
import MenuItems from "../MenuItems/MenuItems";
import './MenuData.css';

function MenuData() {
  const [items, setItems] = useState(null);

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
    const data = Object.keys(items).map(key => {
      return (
        <MenuItems
          id={key}
          key={items[key]['name_for_customer']}
          name={items[key]['name_for_customer']}
          stock={items[key]['in_stock'] ? 'In Stock' : 'Out of Stock'}
          image={"https://static.bbot.menu" + items[key]['imageUrl']}
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
