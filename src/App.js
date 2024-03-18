import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => (
        <BrowserRouter>
      <Routes>
         <Route exact path="/login" element={<Login />}/>
         <Route exact path="/" element={<Dashboard />}/>
      </Routes>
      </BrowserRouter>
  )

export default App;
