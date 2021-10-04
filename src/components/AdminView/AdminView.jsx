import "./AdminView.css";
import AdminItem from "../AdminItem/AdminItem"

function AdminView(props) {


    return (
        <div class="admin-order-container">
            <h1>Current Orders: </h1>

            {props.adminOrders.map((item) => {
                return <AdminItem {...item} />;
            })}
        </div>
    );
}

export default AdminView;
