import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import { Home } from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
	const [navVisible, showNavbar] = useState(false);

	return (
		<BrowserRouter >
			<div className="App">
				<Navbar visible={ navVisible } show={ showNavbar } />
				<Routes>
					<Route path='/' element={<Home visible={navVisible}/>}/>
					<Route path='/organizations' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>organizations</h1>
						</div>
					}/>
					<Route path='/Assets' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>assets</h1>
						</div>
					}/>
					<Route path='/settings' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Settings</h1>
						</div>
					}/>
				</Routes>
			</div>
		</BrowserRouter>
  );
}

export default App;
