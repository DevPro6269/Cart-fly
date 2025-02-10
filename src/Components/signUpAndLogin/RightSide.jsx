import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import InfoFeild from './InfoFeild';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../Store/AuthSlice';

const RightSide = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    });
    
    const dispatch = useDispatch()
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

        axios.post('http://localhost:8000/api/user/signup', userData)
            .then(function (response) {
                if (response && response.data) {
                    navigate("/home"); // Navigate to home page after success
                     dispatch(setLoggedIn(response.data.data))
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
            <InfoFeild heading={"Create an Account"} para={"Enter your details below"} />

            <form onSubmit={handleSubmit} className='flex mr-2 flex-col'>
                <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                    placeholder='Name'
                    className='outline-none w-72 p-1 text-lg border-b-2'
                /> <br />
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
            
            <div className='flex w-full items-center mb-4 flex-col gap-2'>
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className='px-6 w-3/5 text-xl text-white p-2 bg-red-500'>
                    {loading ? 'Creating Account...' : 'Create Account'}
                </button>
                <button className='px-2 p-2 w-3/5 border-2'>Sign up with Google</button>
            </div>

            <div>
                <p>Already have an account? <Link className='underline text-blue-400' to="/login">Log in</Link></p>
            </div>
        </div>
    );
};

export default RightSide;
