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
import ProductDetails_Info from './Components/ProductDetails_Info/ProductDetails_Info'
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
           
            <Route path='/' Component={Home}/>
            <Route path='/AboutUs' Component={AboutUs}/>
            <Route path='/ProductOfCellinfo' Component={Product}/>
            <Route path='/ProductOfCellinfo/:id' Component={ProductDetails_Info}/>
            <Route path='/Service' Component={Service}/>
            <Route path='/Compare' Component={Compare}/>

          </Routes>
      </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
