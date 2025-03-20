import { useState } from "react";
import LoginForm from "./LoginForm.jsx";
import Attendance from "./Attendance.jsx";

export default function AuthWrapper() {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const handleLogin = () => setAuthenticated(true);

    return (
        <div>
            {!isAuthenticated ? <LoginForm onLogin={handleLogin} /> : <Attendance />}
        </div>
    );
}