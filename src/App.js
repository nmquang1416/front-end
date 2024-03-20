import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Shop } from "./Pages/Shop";
import Home from '../src/PageOfCellinfo/Home';
import { ShopCategory } from "./Pages/ShopCategory";
import { ProductOfCellinfo } from "./PageOfCellinfo/ProductOfCellinfo";
import Footer from '../src/Components/Footer/Footer';
import ItemsProduct from './Components/ItemsProduct/ItemsProduct'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/Home' element={<ShopCategory category="Home"/>}/>
            <Route path='/About Us' element={<ShopCategory category="About us"/>}/>
            <Route path='/ProductOfCellinfo' element={<ShopCategory category="ProductOfCellinfo"/>}/>
            <Route path='/Service' element={<ShopCategory category="Service"/>}/>
            <Route path='/Compare' element={<ShopCategory category="Compare"/>}/>
            <Route path='/ProductOfCellinfo' element={<ProductOfCellinfo/>}>
              <Route path =':productId' element={<ProductOfCellinfo/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
