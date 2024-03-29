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
import General_info from './Components/ProductDetails_Info/General_info'
import Performance_info from './Components/ProductDetails_Info/Performance_info'
import Question from './Components/ProductDetails_Info/Question'
// end Page
// 
// import banner_section from './Components/Assets/Img/banner-section.png';
// import ShopCategory from "./PageOfCellinfo/ShopCategory";


function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/AboutUs' Component={AboutUs} />
          <Route path='/ProductOfCellinfo' Component={Product} />
          <Route path='/ProductOfCellinfo' />
          <Route path='/ProductOfCellinfo/:id' Component={ProductDetails_Info} >
            {/* <Route path=":id" element={<ProductDetails_Info />} />
              <Route path="me"/> */}
          </Route>
          <Route path='/Service' Component={Service} />
          <Route path='/Compare' Component={Compare} />
        </Routes>
        <Routes>
          <Route path='/ProductOfCellinfo/:id/General' Component={General_info} />
          <Route path='/ProductOfCellinfo/:id/Performance' Component={Performance_info} />
          <Route path='/ProductOfCellinfo/:id/Question' Component={Question} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
