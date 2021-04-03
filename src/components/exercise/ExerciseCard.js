import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import { SearchCard } from '../Styled';
import { StyledExerciseCard } from "./ExerciseCard.styled";

const ExerciseCard = ({ id, name, bodyArea, image, transcript }) => {
  const transcriptAsText = transcript
    ? `${transcript.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";

  return (
    <StyledExerciseCard>
      <div>
        <img
          className="img-wrapper"
          style={{ width: "300px" }}
          src={image}
          alt="exercise posture"
        />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{bodyArea}</p>
        <p>{transcriptAsText}</p>
      </div>
      <div className="btns">
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button">
          Star me
        </button>
      </div>
    </StyledExerciseCard>
  );
};

export default ExerciseCard;
