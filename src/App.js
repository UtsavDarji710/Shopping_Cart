import './App.css';
import Card from './Component/Card'
import Navbar from './Component/Navbar';
import ShoppingCard from './Component/ShoppingCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ShoppingCard/>
      <Card/>
    </div>
  );
}

export default App;
