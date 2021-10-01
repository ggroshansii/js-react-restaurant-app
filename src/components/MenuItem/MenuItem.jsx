
import './MenuItem.css';
import formatCurrency from '../../FormatUtility';

function MenuItem(props) {


  return (
    <div className="menu-item-container" >
        <h3>{props.name}</h3>
        <h4>{props.desc}</h4>
        <p>{props.ingredients.join(", ")}</p>
        <p>${formatCurrency(props.price)}</p>
        <button value={JSON.stringify(props)} onClick={(event) => props.addToOrder(event)}>Add to Order</button>
    </div>
  );
}

export default MenuItem;