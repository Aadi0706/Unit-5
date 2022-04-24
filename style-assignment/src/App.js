import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button'
import './components/button1.css';
function App() {
  return (
    <div className="App">
      <Button className="btn1">Primary Button </Button>
      <Button className="btn2">Default Button</Button>
      <Button className="btn3">Dashed Button</Button>
      <Button className="btn4">Text Button</Button>
      <Button className="btn5">Link Button</Button>
    </div>
  );
}

export default App;
