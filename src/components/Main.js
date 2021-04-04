import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseGrid from './exercise/ExerciseGrid';
import Api from './utils/API';



function Main() {
    const [ exercise, setExercise ] = useState([]);
    const [ toggleImage, setToggleImage ] = useState(true)
    const [ isLoading, setIsLoading ] = useState(true)
    
    useEffect(() => {
        Api.getExercise('/').then(res => {
            console.log('the response', res)
            setExercise(res.data.exercises)
            setIsLoading(false)
        })
        .catch(err => {
            console.log('Error', err)
        })
    }, [])

    function toggleTheme(){
        setToggleImage(prevImage => !prevImage)
    }

    const ThemeContext = React.createContext()

    if(isLoading){
        return <div>Data is being loaded</div>
    }
   

    return (
        
            <>
            
            
            <div>
            <ThemeContext.Provider value={toggleImage}>
                <button style={{color: 'red'}} onClick={toggleTheme}>Switch Gender</button>
            </ThemeContext.Provider>
            </div>
            
             
            
            {  exercise.map(fitness => {

                 
             
                    
                    return(
                        <>
                       
                            <ExerciseGrid data={fitness} toggle={toggleImage}/>
                            </>
                        
                    )
                })
            
            }    
        </>

    )
}

export default Main;



