import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
    const { token, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <header>
            <p>BookBuddy</p>

            <nav>
                {!token ? (
                    <>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            Books
                        </NavLink>

                        <NavLink to="/login">
                            Login
                        </NavLink>

                        <NavLink to="/register">
                            Register
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink
                            to="/account"
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            Account
                        </NavLink>

                        <NavLink onClick={handleLogout}>
                            Logout
                        </NavLink>
                    </>
                )}
            </nav>
        </header>
    );
}