
import './Menu.css';
import MenuItemList from "../MenuItemList/MenuItemList"
import OrderItemList from "../OrderItemList/OrderItemList"

function Menu(props) {
  return (
    <div>
        This is Menu Page
        <MenuItemList MenuUtility={props.MenuUtility} />
        <OrderItemList />
    </div>
  );
}

export default Menu;
