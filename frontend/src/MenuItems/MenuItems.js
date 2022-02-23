import { Link } from 'react-router-dom';
import './MenuItems.css';

function MenuItems(props) {
  const { name, stock, image, id } = props;

  return (
    <div className='ItemDetails'>
      <img
        src={image}
        alt={name}
      />
      <Link to = {`/details/${id}`}>
        <h3>{name}</h3>
      </Link>
      <div>{stock}</div>
    </div>
  );
}

export default MenuItems;