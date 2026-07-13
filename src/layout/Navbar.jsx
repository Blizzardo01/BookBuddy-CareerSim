import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <header>
            <p>BookBuddy</p>
            <nav>
                <NavLink to="/" className={({ isActive}) => (isActive ? "active" : undefined)}>
                    Books
                </NavLink>
                <NavLink to="/login">
                Login
                </NavLink>
                <NavLink to="/register">
                Register
                </NavLink>
            </nav>
        </header>
    );
}