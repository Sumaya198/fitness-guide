import React, { useState } from "react";
//import { Link } from "react-router-dom";
//import { SearchCard } from '../Styled';
import { StyledExerciseCard } from "./ExerciseCard.styled";
import  Modal from "react-modal";
import { CardWrapper, Button, ModalWrapper, ModalContent, FlexGrid } from "../Styled";
import GymSharkLogo from '../images/GymSharkLogo-01.png'

const ExerciseCard = ({ data , toggle}) => {
   
  const [modalIsOpen, setModalIsOpen] = useState(false)


  return (
    <FlexGrid >
    <CardWrapper>
    <StyledExerciseCard>
      <div key={data.id} className="card">
      <div >
        <img
          className="img-wrapper"
          style={{ width: "300px" }}
          src={toggle? data.female.image : data.male.image}
          alt="exercise posture"
        />
      </div>
      <div>
        <h1>{data.name}</h1>   
        <img src={GymSharkLogo} style={{width: '50px'}} alt="logo"/>    
      </div>
      <div>       
       <Button onClick={()=> setModalIsOpen(true)}>Instructions</Button>
        <Modal isOpen={modalIsOpen}
        ariaHideApp={false}>
          
        <ModalWrapper>
        <ModalContent>     
          <h2 className="title">{data.name}</h2>  
          <p className="target-areas">Target body areas:</p>
          <h4 className="subtitle">{data.bodyAreas[0]} & {data.bodyAreas[1]}</h4>
          <div dangerouslySetInnerHTML={{ __html: data.transcript}}/>
            <Button onClick={() => setModalIsOpen(false)}>Close</Button>
            
          </ModalContent>
          </ModalWrapper>
          
        </Modal>
      </div>
      </div>
    </StyledExerciseCard>
    </CardWrapper>
    </FlexGrid>
  );
};

export default ExerciseCard;
