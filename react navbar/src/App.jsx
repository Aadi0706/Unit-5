// import logo from './logo.svg';
import './App.css';
import {Logo} from './components/logo.jsx';
import {Button} from './components/button.jsx';
import {Links} from './components/links.jsx';

function App() {
  return (
    <div className="App">
      <Logo name="LOGOBAKERY"/>
      
      <div id="linkop">
      <Links name="Services"/>
      <Links name="Projects"/>
      <Links name="About"/>
      </div>
    

      <Button name="Contact"/>
    </div>
  );
}

export default App;
