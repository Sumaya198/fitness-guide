import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
//import { SearchCard } from '../Styled';
import { StyledExerciseCard } from "./ExerciseCard.styled";
import  Modal from "react-modal";

const ExerciseCard = ({ key, id, name, bodyAreaOne, bodyAreaTwo, image, transcript }) => {
   
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const transcriptAsText = transcript
    ? `${transcript.replace(/<.+?>/g, "")}...`
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
       
        
      </div>
      <div className="btns">
        
       <Link onClick={()=> setModalIsOpen(true)}>Instructions</Link>
        <Modal isOpen={modalIsOpen}>
          <h2>{name}</h2>
          <h4>{bodyAreaOne}</h4>
          <h4>{bodyAreaTwo}</h4>
          <p>{transcriptAsText}</p>
          <div>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </Modal>
        <button type="button">
          Star me
        </button>
      </div>
    </StyledExerciseCard>
  );
};

export default ExerciseCard;
