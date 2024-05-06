import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import equipmentBanner from './Components/Assets/banner_mens.png';
import gamesBanner from './Components/Assets/banner_women.png';
import merchandiseBanner from './Components/Assets/banner_kids.png';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/equipment' element={<ShopCategory banner={equipmentBanner} category="equipment"/>}/>
        <Route path='/games' element={<ShopCategory banner={gamesBanner} category="games"/>}/>
        <Route path='/merchandise' element={<ShopCategory banner={merchandiseBanner} category="merchandise"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
