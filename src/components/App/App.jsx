import "./App.css";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import AdminView from "../AdminView/AdminView";
import Footer from "../Footer/Footer";
import OrderSubmit from "../OrderSubmit/OrderSubmit";
import MenuUtility from "../../MenuUtility.json";
import formatCurrency from "../../FormatUtility"
import { useState, useEffect, useRef } from "react";

function App() {
    const [navSelection, setNavSelection] = useState("home");
    const [orderItems, setOrderItems] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0);
    const [orderTax, setOrderTax] = useState(0);
    const [adminOrders, setAdminOrders] = useState([]);

    const firstRender = useRef(true);

    console.log("ADMIN ORDERS", adminOrders)

    useEffect(() => {
        getOrders();
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            let total = (orderItems.reduce((accum, element) => {
                return accum + (element.price)
            }, 0));
            let tax = total * 0.07;
            setOrderTax(formatCurrency(tax));
            setOrderTotal(formatCurrency(total + tax))
        }
    }, [orderItems]);

    function addToOrder(event) {
        setOrderItems([...orderItems, JSON.parse(event.target.value)]);
        console.log("ORDER ITEMS:", orderItems);
    }

    async function submitOrder(firstName = "anonymous") {
        let finalOrder = {
            name: firstName,
            order: orderItems,
            total: orderTotal,
            tax: orderTax,
            isCompleted: false,
        };
        const response = await fetch(
            "https://tiny-taco-server.herokuapp.com/yomamas/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(finalOrder),
            }
        );
        return response.json();
    }

  function getOrders() {
        fetch("https://tiny-taco-server.herokuapp.com/yomamas/")
            .then((response) => response.json())
            .then((data) => setAdminOrders(data));
    }




    let html;
    switch (navSelection) {
        case "home":
            html = <Home />;
            break;
        case "menu":
            html = (
                <Menu
                    MenuUtility={MenuUtility}
                    addToOrder={addToOrder}
                    orderItems={orderItems}
                    orderTax={orderTax}
                    orderTotal={orderTotal}
                    changeNavSelection={changeNavSelection}
                />
            );
            break;
        case "order":
            html = (
                <OrderSubmit
                    orderItems={orderItems}
                    orderTax={orderTax}
                    orderTotal={orderTotal}
                    submitOrder={submitOrder}
                />
            );
            break;
          case 'aboutus':
            html = <AboutUs />
            break;
          case "contactus":
            html = <ContactUs />
            break;
          case "adminview":
            html = <AdminView adminOrders={adminOrders}/>
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
            <NavBar changeNavSelection={changeNavSelection} />
            {html}
            <Footer/>
        </div>
    );
}

export default App;
