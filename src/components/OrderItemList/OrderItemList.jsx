import "./OrderItemList.css";
import OrderItem from "../OrderItem/OrderItem";

import { v4 as uuidv4 } from "uuid";

function OrderItemList(props) {
    return (
        <div className="order-list-container">
            <h2>Order:</h2>
            <div className="order">
                {props.orderItems.map((element) => {
                    return <OrderItem key={uuidv4()} {...element} />;
                })}
                <div className="total-continue-container">
                    
                        <div className="total-tax">
                        <h3>Tax:</h3>
                        <p>${props.orderTax}</p>
                        </div>
                        <div className="total-amount">
                        <h3>Total:</h3>
                        <p>${props.orderTotal}</p>
                        </div>

                
                    <div className="continue-button-container">
                        <button
                            type="submit"
                            value="order"
                            onClick={(event) => {
                                props.changeNavSelection(event.target.value);
                            }}
                        >
                            Continue with Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItemList;
