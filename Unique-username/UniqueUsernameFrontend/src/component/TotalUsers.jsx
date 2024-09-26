import React, { useState, useEffect } from 'react';
import { formatNumber } from './utils'; // Create a separate utils file for reusable functions

const TotalUsers = () => {
    const [totalUsersCount, setTotalUsersCount] = useState(null);
    
    const totalUsers = async () => {
        try {
            console.log(`${import.meta.env.REACT_APP_API_URL}`)
            const response = await fetch(`${import.meta.env.REACT_APP_API_URL}/api/users/totalUsers`);
            const data = await response.json();
            setTotalUsersCount(data);
        } catch (error) {
            console.error('Error fetching total users:', error);
        }
    };

    useEffect(() => {
        totalUsers();
    }, []);

    return (
        <div className="alert alert-info mt-3 text-center">
            Total Users: {totalUsersCount} <span> and </span> {formatNumber(totalUsersCount)} <br />
        </div>
    );
};

export default TotalUsers;
