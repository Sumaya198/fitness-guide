import React, { useContext, useState } from "react";
//import { Link } from "react-router-dom";
//import { SearchCard } from '../Styled';
import { StyledExerciseCard } from "./ExerciseCard.styled";
import  Modal from "react-modal";
import { CardWrapper } from "../Styled";

const ExerciseCard = ({ key, id, name, bodyAreaOne, bodyAreaTwo, image, transcript }) => {
   
  const [modalIsOpen, setModalIsOpen] = useState(false)


  return (
    <CardWrapper>
    <StyledExerciseCard>
      <div className="card">
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
        
       <button onClick={()=> setModalIsOpen(true)}>Instructions</button>
        <Modal isOpen={modalIsOpen}>
          <h2>{name}</h2>
          <h4>{bodyAreaOne}</h4>
          <h4>{bodyAreaTwo}</h4>
          <div dangerouslySetInnerHTML={{ __html: transcript}}/>
         
          <div className="btns">
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </Modal>
      </div>
      </div>
    </StyledExerciseCard>
    </CardWrapper>
  );
};

export default ExerciseCard;
