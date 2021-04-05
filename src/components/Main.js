import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseGrid from './exercise/ExerciseGrid';
import Api from './utils/API';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';




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
        return <CircularProgress/>
    }
   
    

    return (
        
            <>
            
            
            <div>
          
            <ThemeContext.Provider value={toggleImage}>
                <button style={{color: 'red', margin: '40px', justifyContent: 'center', alignItems: 'center', display: 'flex', outline: 'none'}} onClick={toggleTheme}>Switch Gender</button>
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



