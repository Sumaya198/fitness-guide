import React from 'react'
import { FlexGrid } from '../Styled'
import ExerciseCard from './ExerciseCard'


const ExerciseGrid = ({ data , toggle}) => {

   
    
    return (
       
           <FlexGrid>
            {
                <ExerciseCard 
                key={data.id} 
                id={data.id} 
                name={data.name} 
                bodyAreaOne={data.bodyAreas[0]} 
                bodyAreaTwo={data.bodyAreas[1]} 
                image={toggle? data.female.image : data.male.image}
                transcript={data.transcript}/>
            }
            </FlexGrid>
    )
}

export default ExerciseGrid
