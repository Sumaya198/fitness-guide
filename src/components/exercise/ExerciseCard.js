import React from 'react'
import { Link } from 'react-router-dom';
import { SearchCard } from '../Styled';

const ExerciseCard = ({ id, name, bodyArea, image, transcript }) => {
    const transcriptAsText = transcript 
    ? `${transcript.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`:
    'No description'
    return (
        <SearchCard>
            <div>
                <img style={{width: '300px'}} src={image} alt="exercise posture" />
            </div>
        <div>
            <h1>{name}</h1>
            <p>{bodyArea}</p>
            <p>{transcriptAsText}</p>
        </div>
        <div>
  <Link to={`/show/${id}`}>Read more</Link>
  <button type="button">Star me</button>
        </div>
        </SearchCard>
    )
}

export default ExerciseCard
