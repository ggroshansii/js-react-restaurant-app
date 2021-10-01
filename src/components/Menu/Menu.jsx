
import './Menu.css';
import MenuItemList from "../MenuItemList/MenuItemList"
import OrderItemList from "../OrderItemList/OrderItemList"
import { useState, useEffect, useRef } from 'react'

function Menu(props) {


  return (
    <div className="menu-container">
        <MenuItemList MenuUtility={props.MenuUtility} addToOrder={props.addToOrder} />
        <OrderItemList orderItems={props.orderItems} orderTotal={props.orderTotal} changeNavSelection={props.changeNavSelection} />
    </div>
  );
}

export default Menu;
