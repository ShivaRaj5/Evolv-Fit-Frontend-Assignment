import React from 'react';
import { useParams } from 'react-router-dom';

const Workout = () => {
    const {userId}=useParams();
    return (
    <>
        <h1>{userId}</h1>
        <h1>Workout</h1>
    </>
    ) 
}

export default Workout;