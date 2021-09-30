
import './MenuItem.css';

function MenuItem(props) {


  return (
    <div className="menu-item-container" >
        <h3>{props.name}</h3>
        <h4>{props.desc}</h4>
        <p>{props.ingredients.join(", ")}</p>
        <p>${props.price.toFixed(2)}</p>
        <button value={JSON.stringify(props)} onClick={(event) => props.addToOrder(event)}>Add to Order</button>
    </div>
  );
}

export default MenuItem;