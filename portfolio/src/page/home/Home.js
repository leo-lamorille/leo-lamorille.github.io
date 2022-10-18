import { NavLink } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <NavLink to="/" end> Home</NavLink>
            <NavLink to="/my-cv" end> CV</NavLink>
        </div>
    );
}