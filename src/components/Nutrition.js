import React from 'react';
import { useParams } from 'react-router-dom';

const Nutrition = () => {
    const  {userId}=useParams();
    return (
    <>
        <h1>{userId}</h1>
        <h1>Nutrition</h1>
    </>
    )
}

export default Nutrition;