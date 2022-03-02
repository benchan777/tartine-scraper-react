import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetails.css';

function ItemDetails() {
	const [items, setItems] = useState(null);
	const params = useParams();
	const { id } = params;

	useEffect(() => {
		fetch('https://tartine-scraper-api.main.benchan.tech/api/scraper')
			.then((res) => res.json())
			.then((result) => setItems(result))
			.catch((err) => console.log(err));
	}, []);
	if (items === null) {
		return null;
	} else {
		let stock_status = items[id]['in_stock'] ? 'in_stock' : 'out_stock';
		return (
			<div className="ItemDetails">
				<img
					src={'https://static.bbot.menu' + items[id]['imageUrl']}
					alt={items[id]['name_for_customer']}
				/>
				<h2 className="ItemName">{items[id]['name_for_customer']}</h2>
				<div className={stock_status}>{items[id]['in_stock'] ? 'In Stock' : 'Out of Stock'}</div>
				<div className="Description">Description: {items[id]['description']}</div>
				<div className="Price">Price: {items[id]['price_string']}</div>
			</div>
		);
	}
}

export default ItemDetails;
