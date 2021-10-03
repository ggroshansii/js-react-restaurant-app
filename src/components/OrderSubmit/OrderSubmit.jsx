import "./OrderSubmit.css";
import { useState } from "react";
import formatCurrency from "../../FormatUtility";

function OrderSubmit(props) {
    const [fullName, setFullName] = useState("");

    function handleChange(event) {
        setFullName(event.target.value);
    }

    return (
        <div className="order-submit-container">
            <div className="order-submit-card">
                <h2>Your Order:</h2>
                <div className="order-item-list">
                    {props.orderItems.map((element) => {
                        return (
                            <>
                                <div class="order-item-final">
                                    <p>{element.name}</p>
                                    <p>
                                        <strong>
                                            ${formatCurrency(element.price)}
                                        </strong>
                                    </p>
                                </div>
                            </>
                        );
                    })}
                </div>

                <div className="total-final">
                    <div className="tax-total-final">
                        <h2>Tax:</h2>
                        <p>
                            <strong>${props.orderTax}</strong>
                        </p>
                    </div>

                    <div className="tax-total-final">
                        <h2>Total:</h2>
                        <p>
                            <strong>${props.orderTotal}</strong>
                        </p>
                    </div>
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
                    <button
                        type="submit"
                        id="submit-order"
                        onClick={() => props.submitOrder(fullName)}
                    >
                        Submit Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderSubmit;
