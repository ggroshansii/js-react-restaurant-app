
import './MenuItemList.css';
import MenuItem from '../MenuItem/MenuItem'

function MenuItemList(props) {
  return (
    <div>
      {console.log(props.MenuUtility)}
      {props.MenuUtility.menu.map(element => {
          return <MenuItem {...element}/>
      })}
    </div>
  );
}

export default MenuItemList;
