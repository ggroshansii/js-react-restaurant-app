
import './App.css';
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Menu from '../Menu/Menu'
import MenuUtility from '../../utility.json'
import { useState } from 'react'

function App() {

const [navSelection, setNavSelection] = useState('home');

let html;
switch (navSelection) {
  case 'home':
    html = <Home />;
    break;
  case 'menu':
    html = <Menu MenuUtility={MenuUtility}/>;
    break;
}

function changeNavSelection(value) {
  setNavSelection(value);
}

  return (
    <div className="App">
      <Logo />
      <NavBar changeNavSelection={changeNavSelection}/>
      {html}
    </div>
  );
}

export default App;
