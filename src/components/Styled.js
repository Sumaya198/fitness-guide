import styled from 'styled-components';

export const FlexGrid = styled.div`
   display: inline-flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   margin-left: 50px;
`;

export const CardWrapper = styled.div`
   .card{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 350px;
    margin: auto;
    padding: 10px;
    height: 520px;
    text-align: center;
    display: inline-flex;
    border-radius: 40px;
    }
`;

export const ExerciseCardStyle = styled.div`
   width: 300px;
   height: 100%auto;
   margin: 0 50px 40px;

   .img-wrapper{
       width: 100%;
       border-radius: 30px;
       height: 350px;
       overflow: hidden;
       border: 1px solid #ddd;

       img {
           
           height: 80%;
           width: 100%;
       }
   }
   h1 {
       margin: 10px 0;
       font-size: 21px;
   }

`;



export const Button = styled.button`
padding: 10px 14px;
    background:#009FE3;
    color: #fff;
    border: none;
    border-radius: 10px;
.genderButton{
    margin: 60px;
}
.instruction-btn{
    margin-top:10px;
}
`;

//modal styles
export const ModalWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 20px 20px;
  margin: 50px;
 
  display: flex;

  position: absolute;
  .containery{
  height:100%;
  width:100%;
  font-size:0;
  margin:0 auto;
}
  .item{
  display: flex;
  vertical-align:top;
  background:#00BF1D;
  height:100%;
  width:80%;
}
.item:nth-child(2){
  background:#F4CAAE;
}
  
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8;
  color:#000;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background:#009FE3;
    color: #fff;
    border: none;
  }
  .title{
    padding: 30px;
    font-size: 40px;
  }
  .subtitle{
      margin-bottom: 30px;
      font-size: 35px; 
  }
  .target-areas{
      text-transform: uppercase;
      color: #009FE3;
      font-weight: 800;
  }
`;

