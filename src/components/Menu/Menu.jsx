
import './Menu.css';
import MenuItemList from "../MenuItemList/MenuItemList"
import OrderItemList from "../OrderItemList/OrderItemList"
import { useState, useEffect, useRef } from 'react'

function Menu(props) {


  return (
    <div className="menu-container">
        <MenuItemList MenuUtility={props.MenuUtility} addToOrder={props.addToOrder} />
        <OrderItemList orderItems={props.orderItems} orderTotal={props.orderTotal}/>
    </div>
  );
}

export default Menu;
