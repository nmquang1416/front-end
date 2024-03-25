import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Footer from '../src/Components/Footer/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from './PageOfCellinfo/Home';
import AboutUs from './PageOfCellinfo/AboutUs';
import Product from './PageOfCellinfo/Product';
import Service from './PageOfCellinfo/Service';
import Compare from './PageOfCellinfo/Compare';
import ProductDetails_Info from './Components/ProductDetails_Info'
// end Pages

// 
// import banner_section from './Components/Assets/Img/banner-section.png';
// import ShopCategory from "./PageOfCellinfo/ShopCategory";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            {/* <Route path='/' banner={banner_section} element={<ShopCategory category="Home"/>}/>
            <Route path='/aboutUs'  banner={banner_section} element={<ShopCategory category="About"/>}/>
            <Route path='/productOfCellinfo' Component={Product} banner={banner_section} element={<ShopCategory category="ProductOfCellinfo"/>}/>
            <Route path='/service' banner={banner_section} element={<ShopCategory category="Service"/>}/>
            <Route path='/compare' banner={banner_section} element={<ShopCategory category="Compare"/>}/>
            <Route path='/ProductOfCellinfo' banner={banner_section} element={<ProductOfCellinfo/>}>
              <Route path =':productId' element={<ProductOfCellinfo/>}/>
            </Route> */}

            <Route path='/' Component={Home}/>
            <Route path='/AboutUs' Component={AboutUs}/>
            <Route path='/ProductOfCellinfo' Component={Product}/>
            <Route path='/product/:product_id' Component={ProductDetails_Info}/>
            <Route path='/Service' Component={Service}/>
            <Route path='/Compare' Component={Compare}/>

          </Routes>
      </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
