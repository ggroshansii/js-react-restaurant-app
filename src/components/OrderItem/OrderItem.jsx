
import './OrderItem.css';
import formatCurrency from '../../FormatUtility';

function OrderItem(props) {
  return (
    <div className="order-item">
        <h3>{props.name}</h3>
        <p>${formatCurrency(props.price)}</p>
    </div>
  );
}

export default OrderItem;