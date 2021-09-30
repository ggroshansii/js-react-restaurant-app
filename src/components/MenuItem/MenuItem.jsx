
import './MenuItem.css';

function MenuItem(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <h3>{props.desc}</h3>
    </div>
  );
}

export default MenuItem;