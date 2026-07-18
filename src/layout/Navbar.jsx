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
            <div className="brand">
                <img src="/books.png" alt="BookBuddy logo" />
                <p>BookBuddy</p>
            </div>

            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active" : undefined
                    }
                >
                    Books
                </NavLink>

                {!token ? (
                    <>
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

                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                )}
            </nav>
        </header>
    );
}