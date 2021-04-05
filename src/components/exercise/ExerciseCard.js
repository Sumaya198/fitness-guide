import React, { useContext, useState } from "react";
//import { Link } from "react-router-dom";
//import { SearchCard } from '../Styled';
import { StyledExerciseCard } from "./ExerciseCard.styled";
import  Modal from "react-modal";
import { CardWrapper, Button, Background, ModalWrapper, ModalContent, CloseModalButton, } from "../Styled";

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
      <div>
        
       <Button onClick={()=> setModalIsOpen(true)}>Instructions</Button>
        <Modal isOpen={modalIsOpen}>
        <ModalWrapper>
        <ModalContent>
          <h2 className="title">{name}</h2>
          <h4 className="subtitle">{bodyAreaOne} & {bodyAreaTwo}</h4>
          
          <div dangerouslySetInnerHTML={{ __html: transcript}}/>
          
         
          
            <Button onClick={() => setModalIsOpen(false)}>Close</Button>
          
          </ModalContent>
          </ModalWrapper>
          
        </Modal>
      </div>
      </div>
    </StyledExerciseCard>
    </CardWrapper>
  );
};

export default ExerciseCard;
