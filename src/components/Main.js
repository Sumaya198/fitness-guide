import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseGrid from './exercise/ExerciseGrid';

//import { FlexGrid } from './Styled';
//import './Main.css';


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
        
            <>
            
            
            <div>
            <ThemeContext.Provider value={toggleImage}>
                <button style={{color: 'red'}} onClick={toggleTheme}>Switch Gender</button>
            </ThemeContext.Provider>
            </div>
            
             
            
            {  exercise.map(fitness => {

                 
             
                    
                    return(
                       
                            <ExerciseGrid data={fitness} toggle={toggleImage}/>
                        
                    )
                })
            
            }    
        </>

    )
}

export default Main;



