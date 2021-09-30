
import './OrderItem.css';

function OrderItem(props) {
  return (
    <div className="order-item">
        <h3>{props.name}</h3>
        <p>${props.price.toFixed(2)}</p>
    </div>
  );
}

export default OrderItem;