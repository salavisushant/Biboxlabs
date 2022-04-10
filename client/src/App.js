import './App.css';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navbar/Navbar';
import {Routes,Route} from "react-router-dom"
import { CartoonData } from './components/cartoons/CartoonData';
import { Bag } from './components/Bag/Bag';

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Routes>
        <Route path="" element={<Main/>}/>
        <Route path="/to-cartoons" element={<CartoonData />} />
        <Route path="/bag" element={<Bag/>}/>
      </Routes>
    </div>
  );
}

export default App;
