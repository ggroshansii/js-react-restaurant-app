
import './MenuItemList.css';
import MenuItem from '../MenuItem/MenuItem'

function MenuItemList(props) {
  return (
    <div className="menu-list-container">
    <h2>Menu:</h2>
    <div className="menu-list">
    {console.log(props.MenuUtility)}
      {props.MenuUtility.menu.map(element => {
          return <MenuItem key={element.id} {...element} addToOrder={props.addToOrder}/>
      })}
    </div>
    </div>
  );
}

export default MenuItemList;
