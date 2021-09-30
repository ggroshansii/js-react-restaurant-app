import "./OrderItemList.css";
import OrderItem from "../OrderItem/OrderItem";

function OrderItemList(props) {
    return (
        <div className="order-list-container">
            <h2>Order:</h2>
            {props.orderItems.map((element) => {
                return <OrderItem key={element.id} {...element} />;
            })}
            <div className="total-continue-container">
                <div className="total">
                    <h3>Total:</h3>
                    <p>$10.53</p>
                </div>
                <div className="continue-button-container">
                  <button type="submit">Continue with Order</button>
                </div>
            </div>
        </div>
    );
}

export default OrderItemList;
