import "./AdminView.css";

function AdminView(props) {

return (
<div>
        <h2>Current Orders: </h2>
        {props.adminOrders.map(element => {
            return (
                <>
                <h2>Name:</h2>
                <p>{element.name}</p>
                <h3>Order:</h3>
                <ul>{element.order.map(orderItem => {
                    return <li>{orderItem.name}</li>
                })}
                    </ul>
                <p>Total: <strong>{element.total}</strong></p>
                </>
            )
        })}
</div>
    ) 
}

export default AdminView;
