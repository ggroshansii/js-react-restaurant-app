
import './App.css';
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Menu from '../Menu/Menu'
import OrderSubmit from '../OrderSubmit/OrderSubmit'
import MenuUtility from '../../utility.json'
import { useState, useEffect, useRef } from 'react'

function App() {

const [navSelection, setNavSelection] = useState('home');


const [orderItems, setOrderItems] = useState([]);
const [orderTotal, setOrderTotal] = useState(0);
//add a tax state
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


let html;
switch (navSelection) {
  case 'home':
    html = <Home />;
    break;
  case 'menu':
    html = <Menu MenuUtility={MenuUtility} addToOrder={addToOrder} orderItems={orderItems} orderTotal={orderTotal}/>;
    break;
  case 'order':
    html = <OrderSubmit />
    break;
  default:
    console.log("ERROR IN SWITCH");
    break;
}

function changeNavSelection(value) {
  setNavSelection(value);
}

  return (
    <div className="App">
      <Logo />
      <NavBar changeNavSelection={changeNavSelection}/>
      {html}
    </div>
  );
}

export default App;
