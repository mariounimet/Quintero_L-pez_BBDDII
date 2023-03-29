import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import Home from './pages/home/Home'
import Admin from './pages/Admin/Admin'
import Create from './pages/Admin/Create/Create';
import { Update } from './pages/Admin/Update/Update';
import Layout from './pages/layout/Layout';
import { Login } from './pages/login/login';
import Reserva from './pages/Reserva/Reserva';
import Dashboard from './pages/dashboard/Dashboard';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:movieID' element={<Update />} />
          <Route path='/reserva' element={<Reserva />} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
