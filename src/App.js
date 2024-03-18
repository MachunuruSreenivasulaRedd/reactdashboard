import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => (
        <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<Home />}/>
         <Route exact path="/login" element={<Login />}/>
         <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
  )

export default App;
