
import './Menu.css';
import MenuItemList from "../MenuItemList/MenuItemList"
import OrderItemList from "../OrderItemList/OrderItemList"

function Menu(props) {


  return (
    <div className="menu-container">
        <MenuItemList addToOrder={props.addToOrder} menu={props.menu} />
        <OrderItemList orderItems={props.orderItems} orderTotal={props.orderTotal} orderTax={props.orderTax} changeNavSelection={props.changeNavSelection} />
    </div>
  );
}

export default Menu;
