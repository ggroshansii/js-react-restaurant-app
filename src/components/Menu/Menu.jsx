
import './Menu.css';
import MenuItemList from "../MenuItemList/MenuItemList"
import OrderItemList from "../OrderItemList/OrderItemList"

function Menu() {
  return (
    <div>
        This is Menu Page
        <MenuItemList />
        <OrderItemList />
    </div>
  );
}

export default Menu;
