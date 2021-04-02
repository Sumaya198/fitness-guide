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
            {
                exercise.map(fitness => {
                    return(
                        <div key={fitness.id}>
                            <img src={fitness.male.id}/>
                            <h1>{fitness.name}</h1>
                            <p>{fitness.bodyAreas}</p>
                            <div dangerouslySetInnerHTML={{__html: `${fitness.transcript}`}} />
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Main
