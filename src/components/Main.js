import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css';

function Main() {
    const [ exercise, setExercise ] = useState([]);
    const [ toggleImage, setToggleImage ] = useState(true)

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

    function toggleTheme(){
        setToggleImage(prevImage => !prevImage)
    }

    const ThemeContext = React.createContext()

    return (
        <div>
            <>
            <ThemeContext.Provider value={toggleImage}>
                <button onClick={toggleTheme}>Switch Gender</button>

            </ThemeContext.Provider>
            </>
            {
                exercise.map(fitness => {
                    return(
                        <div key={fitness.id} className="card">
                            {
                                (toggleImage === true) ?
                            <img style={{ width: "100%"}} src={fitness.male.image}/>:
                            <img style={{ width: "100%"}} src={fitness.female.image}/>
                            }
                            <h1 className="title">{fitness.name}</h1>
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
