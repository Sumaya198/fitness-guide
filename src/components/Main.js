import React, { useState, useEffect } from 'react';
import ExerciseGrid from './exercise/ExerciseGrid';
import Api from './utils/API';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from './Styled';




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
                <Button onClick={toggleTheme}>Switch Gender</Button>
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



