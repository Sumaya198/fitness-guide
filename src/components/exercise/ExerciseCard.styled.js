import styled from 'styled-components';
import {SearchCard} from '../Styled';

export const StyledExerciseCard = styled(SearchCard)`
 
 .btns{
     margin-top: 35px;
     display: flex;
     justify-content: center;
     align-items: center;
     
     button{
         outline: none;
         border: 1px solid #8e8e8e;
         border-radius: 15px;
         padding: 5px 20px;
         background-color: #fff;
         display: flex;
         justify-content: center;
         align-items: center;
         &:hover {
             cursor: pointer;
         }
     }

 }
`;