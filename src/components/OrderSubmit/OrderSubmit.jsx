import "./OrderSubmit.css";
import { useState } from "react";

function OrderSubmit(props) {
    const [fullName, setFullName] = useState("");

    let orderSummary = props.orderItems;
    let orderTotal = props.orderTotal;

    console.log(orderSummary, orderTotal);

    function handleChange(event) {
        setFullName(event.target.value);
    }

    return (
        <div className="order-submit-container">
            <h2>Order:</h2>
            <div className="order-item-list">
                {props.orderItems.map((element) => {
                    return (
                        <>
                            <div class="order-item">
                                <p>{element.name}</p>
                                <p>
                                    <strong>${element.price.toFixed(2)}</strong>
                                </p>
                            </div>
                        </>
                    );
                })}
            </div>

            <div className="total">
                <h2>Total:</h2>
                <p><strong>${props.orderTotal.toFixed(2)}</strong></p>
            </div>

            <div className="submit">
                <label htmlFor="full-name"></label>
                <input
                    type="text"
                    id="full-name"
                    placeholder="Enter Full Name"
                    value={fullName}
                    onChange={handleChange}
                />
                <button type="submit" id="submit-order" >Submit Order</button>
            </div>
        </div>
    );
}

export default OrderSubmit;
