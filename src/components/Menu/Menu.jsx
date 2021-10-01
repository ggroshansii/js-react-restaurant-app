
import './Menu.css';
import MenuItemList from "../MenuItemList/MenuItemList"
import OrderItemList from "../OrderItemList/OrderItemList"
import { useState, useEffect, useRef } from 'react'

function Menu(props) {


  const [orderItems, setOrderItems] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const firstRender = useRef(true);


  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    }
    else {
      let total = orderItems.reduce((accum, element) => {
        return accum + element.price;
      }, 0);
      console.log("order total", total);
      setOrderTotal(total)
    }
  }, [orderItems]);


  function addToOrder(event) {
    setOrderItems([...orderItems, JSON.parse(event.target.value)])
    console.log("ORDER ITEMS:", orderItems)
  }


  return (
    <div className="menu-container">
        <MenuItemList MenuUtility={props.MenuUtility} addToOrder={addToOrder} />
        <OrderItemList orderItems={orderItems} orderTotal={orderTotal}/>
    </div>
  );
}

export default Menu;
