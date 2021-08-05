import './App.css';
import Navbar from'./Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home'
import Order_Pizza from './Order_Pizza';
import Build_Ur_Pizza from './Build_Ur_Pizza';
import Footer from './Footer';

function App() {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <Route path="/" component={Home} exact/>
      <Route path="/Order_Pizza" component={Order_Pizza}/>
      <Route path="/Build_Ur_Pizza" component={Build_Ur_Pizza}/>
      <Footer/>
      </BrowserRouter>
    
  );
}

export default App;
