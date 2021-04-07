import React, { useState, useEffect } from 'react';
import ExerciseCard from './exercise/ExerciseCard';
import Api from './utils/API';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from './Styled';
import { FaMale, FaFemale } from "react-icons/fa";

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

    const ThemeContext = React.createContext()

    if(isLoading){
        return <CircularProgress/>
    }
    return (
            <>
            <div style={{marginLeft: '120px', display: 'flex', marginBottom: '70px'}}> 
            <ThemeContext.Provider value={toggleImage}>
                <div >
                <Button onClick={()=>setToggleImage(true)}><FaFemale/></Button>
                </div>
                <div style={{marginLeft: '40px'}}>
                <Button onClick={()=>setToggleImage(false)}><FaMale/></Button>
                </div>
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



