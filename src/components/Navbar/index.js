import React from 'react';
import {
	FaCog,
	FaSignOutAlt,
	FaBars
} from 'react-icons/fa';
import { GoOrganization } from "react-icons/go";
import { IoCubeOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import "./index.css";

const ICON_SIZE = 20;

function Navbar({visible, show}) {
	

	return (
		<>
			<div className="mobile-nav">
			<NavLink
						to="/"
					>
							<img
								src="https://res.cloudinary.com/dollmqugm/image/upload/t_logoii/v1711461493/carbonlogo_azcb8q.png"
								alt="logo"
								className='logo-mobile'
							/>
					</NavLink>
				<button
					className="mobile-nav-btn"
					onClick={() => show(!visible)}
				>
					<FaBars size={24}  />
				</button>
			</div>
			<nav className={!visible ? 'navbar' : ''}>
				<button
					type="button"
					className="nav-btn"
					onClick={() => show(!visible)}
				>
					{ !visible
						? <FaBars size={24}  />  : <FaBars size={24}  />}
				</button>
				<div>
					<NavLink
						className="logo"
						to="/"
					>
							<img
								src="https://res.cloudinary.com/dollmqugm/image/upload/t_logoii/v1711461493/carbonlogo_azcb8q.png"
								alt="logo"
							/>
					</NavLink>
					<div className="links nav-top">
						<NavLink to="/" className="nav-link">
							<GrHomeRounded size={ICON_SIZE} />
							<span>Home</span>
						</NavLink>
						<NavLink to="/organizations" className="nav-link">
							<GoOrganization size={ICON_SIZE} />
							<span>Organizations </span>
						</NavLink>
						<NavLink to="/assets" className="nav-link">
							<IoCubeOutline size={ICON_SIZE} />
							<span>Assets</span> 
						</NavLink>
					</div>
				</div>

				<div className="links">
					<NavLink to="/settings" className="nav-link">
						<FaCog size={ICON_SIZE} />
						<span>Settings</span> 
					</NavLink>
					<NavLink to="/Sign-out" className="nav-link">
						<FaSignOutAlt size={ICON_SIZE} />
						<span>Logout</span> 
					</NavLink>
				</div>
			</nav>
		</>
  );
}

export default Navbar;
