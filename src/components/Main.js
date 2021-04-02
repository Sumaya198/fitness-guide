import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Main() {
    const [exercise, setExercise] = useState([]);

    useEffect(() => {
        axios({
            methos: 'GET',
            url:`https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/` 
        }).then(res => {
            console.log('the response', res)
            setExercise(res.data.exercises)
        })
        .catch(err => {
            console.log('Error', err)
        })
    }, [])
    
    return (
        <div>
            
        </div>
    )
}

export default Main
