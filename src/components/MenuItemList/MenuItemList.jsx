
import './MenuItemList.css';
import MenuItem from '../MenuItem/MenuItem';
import { v4 as uuidv4 } from 'uuid';

function MenuItemList(props) {
  return (
    <div className="menu-list-container">
    <h2>Menu:</h2>
    <div className="menu-list">
      {props.MenuUtility.menu.map(element => {
          return <MenuItem key={ uuidv4() } {...element} addToOrder={props.addToOrder}/>
      })}
    </div>
    </div>
  );
}

export default MenuItemList;
