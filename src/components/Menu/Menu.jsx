
import './Menu.css';
import MenuItemList from "../MenuItemList/MenuItemList"
import OrderItemList from "../OrderItemList/OrderItemList"

function Menu(props) {


  return (
    <div className="menu-container">
        <MenuItemList MenuUtility={props.MenuUtility} addToOrder={props.addToOrder} />
        <OrderItemList orderItems={props.orderItems} orderTotal={props.orderTotal} orderTax={props.orderTax} changeNavSelection={props.changeNavSelection} />
    </div>
  );
}

export default Menu;
