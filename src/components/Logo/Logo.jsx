
import './Logo.css';
import logo from '../../images/logo.png'

function Logo() {
  return (
    <div className="logo-container">
    {console.log(logo)}
          <img src={logo} />
          
    </div>
  );
}

export default Logo;
