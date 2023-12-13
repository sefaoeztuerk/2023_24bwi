import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div classname="App" style={{border:"solid"}}>
      <h1></h1>
      <Person name="Diego" description="ist Coder"/>
      <Person name="Maxim" description="ist Coder"/>
      <Person name="Tamir" description="ist Coder"/>

    </div>  
    );
}

export default App;
