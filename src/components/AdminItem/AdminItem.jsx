import "./AdminItem.css";

function AdminItem(props) {
    return (
        <>
            <div className="admin-order-card">
                <h2>Customer Name:</h2>
                <p>{props.name}</p>
                <h3>Order #{props.id}</h3>
                <ul>
                    {props.order.map((orderItem) => {
                        return <li>{orderItem.name}</li>;
                    })}
                </ul>
                <p>
                    Total: <strong>{props.total}</strong>
                </p>
                <div className="admin-view-inputs-container">
                    <div className="admin-view-checkbox">
                        <input
                            type="checkbox"
                            id="completed"
                            name="is-completed"
                            value="completed"
                            checked={props.isCompleted}
                        />
                          <label for="completed">Completed</label>
                    </div>

                    <button
                        value={props.id}
                        onClick={() => props.deleteOrderAdmin(props.id)}
                    >
                        Delete Order
                    </button>
                </div>
            </div>
            );
        </>
    );
}

export default AdminItem;
