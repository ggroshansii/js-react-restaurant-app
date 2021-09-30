
import './Menu.css';
import MenuItemList from "../MenuItemList/MenuItemList"
import OrderItemList from "../OrderItemList/OrderItemList"
import { useState } from 'react'

function Menu(props) {

  const [orderItems, setOrderItems] = useState([]);

  function addToOrder(event) {
    setOrderItems([...orderItems, JSON.parse(event.target.value)])
    console.log("ORDER ITEMS:", orderItems)
  }

  return (
    <div className="menu-container">
        <MenuItemList MenuUtility={props.MenuUtility} addToOrder={addToOrder} />
        <OrderItemList orderItems={orderItems}/>
    </div>
  );
}

export default Menu;
