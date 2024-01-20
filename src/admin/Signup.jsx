import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSignup = () => {
        axios.post('https://pvc-api-a4ce.onrender.com/api/signup', { email, firstName, lastName, password })
            .then(res => {
                console.log(res.data);
                if (res.data.message === "User already exists") {
                    navigate('/login');
                    console.log("User already exists");
                }
                if (res.data.message === "User registered successfully") {
                    navigate('/events');
                    console.log("Signup successful");
                } else {
                    navigate('/login');
                    console.log("Signup failed");
                }
            })
        console.log('Signing up with:', email, firstName, lastName, password);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-md">
            <h2 className="text-2xl font-semibold mb-6">Signup</h2>
            <form>
                <label className="block mb-2">Email:</label>
                <input
                    type="email"
                    className="w-full p-2 border rounded-md mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="block mb-2">First Name:</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded-md mb-4"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label className="block mb-2">Last Name:</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded-md mb-4"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                    className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                    onClick={handleSignup}
                >
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
