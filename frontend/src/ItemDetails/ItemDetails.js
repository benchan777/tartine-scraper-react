import './ItemDetails.css';

function ItemDetails(props) {
  const { name, description, stock, image } = props;

  return (
    <div className= 'ItemDetails'>
      <img 
        src= {image}
        alt= {name}
      />
      <h3>Name: {name}</h3>
      <div>Description: {description}</div>
      <div>Stock Status: {stock}</div>
    </div>
  );
}

export default ItemDetails;