import styled from 'styled-components';
import {SearchCard} from '../Styled';

export const StyledExerciseCard = styled(SearchCard)`
 
 .btns{
     margin-top: 5px;
     display: flex;
     justify-content: center;
     align-items: center;
     
     button{
         
         border: 1px solid #8e8e8e;
         border-radius: 15px;
         padding: 1px 10px;
         background-color: #fff;
         display: flex;
         justify-content: center;
        
         &:hover {
             cursor: pointer;
         }
     }

 }
`;