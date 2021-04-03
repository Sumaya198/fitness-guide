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
                bodyArea={data.bodyArea} 
                image={toggle? data.female.image : data.male.image}
                transcript={data.transcript}/>
            }
            </FlexGrid>
    )
}

export default ExerciseGrid
