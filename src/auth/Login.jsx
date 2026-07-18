import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const tryLogin = async (formData) => {
        setError(null);
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            await login({email, password});
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <>
        <h1>Log in to your account</h1>
        <form action={tryLogin}>
            <label>
                Email
                <input type="email" name="email" required />
            </label>
            <label>
                Password
                <input type="password" name="password" required />
            </label>
            <button>Login</button>
            {error && <p role="alert">{error}</p>}
        </form>
        <p className="auth-switch">
            Don't have an account?{" "}
            <Link to="/register">
                Create one
            </Link>
        </p>
        </>
    );
}