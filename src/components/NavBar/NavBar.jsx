

import './NavBar.css';

function NavBar(props) {



  return (
    <div>
      <div className="nav-container">
        <button value='home' name='home' onClick={() => props.changeNavSelection('home')}>Home</button>
        <button value="menu" name='menu' onClick={() => props.changeNavSelection('menu')}>Menu</button>
        <button value='aboutus' name='aboutus' onClick={() => props.changeNavSelection('aboutus')}>About Us</button>
        <button value="contactus" name='contactus' onClick={() => props.changeNavSelection('contactus')}>Contact Us</button>
        {/* <button value="aboutus" name='aboutus'>About Us</button>
        <button value="contact" name='contact'>Contact</button> */}

      </div>
    This is the NavBar
    </div>
  );
}

export default NavBar;