import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const res = await axios.post('https://pvc-api-a4ce.onrender.com/api/login', { email, password });

            // Extract the token from the response
            const token = res.data.token;  // Assuming the token is in a property named 'token'

            // Store the token in local storage or session storage
            localStorage.setItem('jwtToken', token);  // For persistent storage across sessions
            // or
            sessionStorage.setItem('jwtToken', token);  // For storage within the current session

            console.log("Login successful");
            navigate('/events');
        } catch (err) {
            console.log(err);
            navigate('/signup');
        }
    };


    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-md">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <form>
                <label className="block mb-2">Email:</label>
                <input
                    type="email"
                    className="w-full p-2 border rounded-md mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="block mb-2">Password:</label>
                <input
                    type="password"
                    className="w-full p-2 border rounded-md mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="button"
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
