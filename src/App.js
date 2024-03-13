import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/' element={<Shop/>}/>
            <Route path='/' element={<Shop/>}/>
            <Route path='/' element={<Shop/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
