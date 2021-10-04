import "./AdminView.css";

function AdminView(props) {
    return (
        <div class="admin-order-container">
            <h2>Current Orders: </h2>
            <button>Deleted Completed Orders</button>
            {props.adminOrders.map((element) => {
                return (
                    <>
                        <div className="admin-order-card">
                            <h2>Customer Name:</h2>
                            <p>{element.name}</p>
                            <h3>Order #{element.id}</h3>
                            <ul>
                                {element.order.map((orderItem) => {
                                    return <li>{orderItem.name}</li>;
                                })}
                            </ul>
                            <p>
                                Total: <strong>{element.total}</strong>
                            </p>
                            <input type="checkbox" id="completed" name="is-completed" value="completed" checked={element.isCompleted}/>
                            <label for="completed">Completed</label>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default AdminView;
