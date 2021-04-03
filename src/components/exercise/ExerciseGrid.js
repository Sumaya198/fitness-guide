import React, {useState} from 'react'
import { FlexGrid } from '../Styled'
import ExerciseCard from './ExerciseCard'

const ExerciseGrid = ({ data }) => {
    return (
        
        <>
        
           <FlexGrid>
            {
                <ExerciseCard 
                key={data.id} 
                id={data.id} 
                name={data.name} 
                bodyArea={data.bodyArea} 
                image={data.female.image}
                transcript={data.transcript}/>
            }
            </FlexGrid>
            
        </>
        
    )
}

export default ExerciseGrid
