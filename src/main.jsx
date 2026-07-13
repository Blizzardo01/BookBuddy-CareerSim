import { createRoot } from "react-dom/client";
import { AuthProvider } from "./auth/AuthContext.jsx";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
<AuthProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</AuthProvider>
);


