import './Navbar.scss';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar-container">
            <NavLink to="/" end> Home</NavLink>
            <NavLink to="/my-cv" end> CV</NavLink>
        </div>
    );
}