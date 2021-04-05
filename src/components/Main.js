import React, { useState, useEffect } from 'react';
import ExerciseCard from './exercise/ExerciseCard';
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
            
            
            <div style={{marginLeft: '50px', marginBottom: '70px'}}>
          
            <ThemeContext.Provider value={toggleImage}>
                <Button onClick={toggleTheme}>{toggleImage? "Switch to Male" : "Switch to Female"}</Button>
            </ThemeContext.Provider>
            
            </div>
            
             
            
            {  exercise.map(fitness => {

                 
             
                    
                    return(
                        <>
                       
                            <ExerciseCard key={fitness} data={fitness} toggle={toggleImage}/>
                            </>
                        
                    )
                })
            
            }    
        </>

    )
}

export default Main;



