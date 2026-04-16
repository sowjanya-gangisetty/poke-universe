'use client';
import { useState,useEffect } from "react";

const UserInput = ({maxNumber}) => {
    const [id , setId] = useState(Math.floor(Math.random() * maxNumber) + 1);

    const handleChange = (event) => {
        let value = event.target.value;

        if (value > maxNumber) {
            value = maxNumber;
           event.target.value = maxNumber;
        }
        if (event.target.value < 1) {

            value = Math.floor(Math.random() * maxNumber + 1);
        }
        setId(value);
    }
    const handleClick = () => {
        
    }


    return (
        <div>
            <h1>UseInput</h1>
            <p>Enter a pokemon id , Max Number: {maxNumber}</p>
            <input type="number" placeholder="Enter pokemon id" max={maxNumber} min={1} onChange={handleChange}/>
            <a href={`/species/${id}`} >Fetch Pokemon</a>
        </div>
    );
}
export default UserInput;