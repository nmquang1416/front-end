import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Shop } from "./Pages/Shop";
import { Home } from "./PageOfCellinfo/ProductOfCellinfo";
import { ShopCategory } from "./Pages/ShopCategory";
import { ProductOfCellinfo } from "./PageOfCellinfo/ProductOfCellinfo";
import  Hero  from "./Components/Hero/Hero";

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

      <Hero/>
    </div>
  );
}

export default App;
