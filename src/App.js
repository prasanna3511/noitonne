// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import TicketList from './Pages/TicketList';
import TicketDetails from './Pages/TicketDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/ticketlist" element={<TicketList/>} />
    <Route path="/ticketdetails" element={<TicketDetails/>} />
    
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
