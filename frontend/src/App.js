import './App.css';
import { CssBaseline, } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import PaymentSuccess from './components/PaymentSuccess';
function App() {
  return (
    <>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
