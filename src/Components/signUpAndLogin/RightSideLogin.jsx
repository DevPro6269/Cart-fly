import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import InfoFeild from './InfoFeild';
import axios from 'axios';

const RightSideLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    // Log userData whenever it changes (for debugging)
    useEffect(() => {
        console.log(userData);
    }, [userData]);

    function handleChange(e) {
        let field = e.target.name;
        let value = e.target.value;
        setUserData((prev) => ({
            ...prev,
            [field]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevent default form submission
        setLoading(true);

        axios.post('http://localhost:8000/api/user/login', userData)
            .then(function (response) {
                if (response && response.data) {
                    navigate("/home"); // Navigate to home page after success
                }
            })
            .catch(function (error) {
                setError(error.response?.data?.message || "Something went wrong. Please try again.");
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    return (
        <div className='w-2/5 h-[600px] flex flex-col justify-center items-center gap-4'>
            <InfoFeild heading={"Log in to Exclusive"} para={"Enter your details below"} />

            <form onSubmit={handleSubmit} className='flex mr-2 flex-col'>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder='Email'
                    className='outline-none w-72 p-1 text-lg border-b-2'
                /> <br />
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder='Password'
                    className='outline-none w-72 text-lg p-1 border-b-2'
                />
            </form>
            {error && <div className="text-red-500 mt-2">{error}</div>} {/* Display error message */}
            
            <div className='flex w-full justify-center items-center mb-4 gap-6'>
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className='px-6 w-1/4 text-xl text-white p-2 bg-red-500'>
                    {loading ? 'Login...' : 'Login'}
                </button>

                <Link className='text-red-500'>forgot password?</Link>
               
            </div>

            <div>
                <p>Create a new account ? <Link className='underline text-blue-400' to="/signup">sign up</Link></p>
            </div>
        </div>
    );
};

export default RightSideLogin;
