import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home'
import Admin from './pages/Admin/Admin'
import Create from './pages/Admin/Create/Create';
import { Update } from './pages/Admin/Update/Update';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/update/:movieID' element={<Update/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
