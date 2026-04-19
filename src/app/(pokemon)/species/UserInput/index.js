'use client';
import { useState,useEffect } from "react";

const UserInput = ({maxNumber}) => {
    const [id , setId] = useState('');
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        let userValue = event.target.value;

        if (userValue > maxNumber) {
            userValue = maxNumber;
           event.target.value = maxNumber;
        }
      
        setValue(userValue);
    }
   
    useEffect(() =>{
        setId(value > 0 ? value : Math.floor(Math.random() * maxNumber) + 1);
    }, [value])

    return (
        <div>
            <h1>UseInput</h1>
            <p>Enter a pokemon id , Max Number: {maxNumber}</p>
            <input type="number" placeholder="Enter pokemon id" max={maxNumber} min={1} onChange={handleChange} value={value}/>
            <p>State value: {value}</p>
            <a href={`/species/${id}`} >Fetch Pokemon</a>
        </div>
    );
}
export default UserInput;