import { useState } from "react";
import { useAuth } from "./AuthContext";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const tryRegister = async (formData) => {
        setError(null);

        const email = formData.get("email");
        const password = formData.get("password");
        
        try {
            await register({ email, password });
            navigate("/")
        } catch (err) {
            setError(err.message);    
        }
    };


    return (
        <>
        <h1>Register for an account</h1>
        <form action={tryRegister}>
            <label>
                Email
                <input type="email" name="email" required />
            </label>
            <label>
                Password
                <input type="password" name="password" required />
            </label>
            <button>Register</button>
            {error && <p role="alert">{error}</p>}
        </form>
        <p className="auth-switch">
            Already a member?{" "}
            <Link to="/login">
                Sign in
            </Link>
        </p>
        </>
    );
}