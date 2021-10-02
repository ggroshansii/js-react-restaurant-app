

import './NavBar.css';

function NavBar(props) {



  return (
    <div>
      <div className="nav-container">
        <button value='home' name='home' onClick={() => props.changeNavSelection('home')}>HOME</button>
        <button value="menu" name='menu' onClick={() => props.changeNavSelection('menu')}>MENU</button>
        <button value='aboutus' name='aboutus' onClick={() => props.changeNavSelection('aboutus')}>ABOUT US</button>
        <button value="contactus" name='contactus' onClick={() => props.changeNavSelection('contactus')}>CONTACT US</button>
        {/* <button value="aboutus" name='aboutus'>About Us</button>
        <button value="contact" name='contact'>Contact</button> */}

      </div>
    </div>
  );
}

export default NavBar;