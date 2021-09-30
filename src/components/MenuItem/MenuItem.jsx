
import './MenuItem.css';

function MenuItem(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <h3>{props.desc}</h3>
        <p>{props.ingredients.join(", ")}</p>
        <p>${props.price.toFixed(2)}</p>
    </div>
  );
}

export default MenuItem;