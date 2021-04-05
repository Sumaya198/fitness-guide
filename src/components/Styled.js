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
    }
`;

export const SearchCard = styled.div`
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

export const HomeGrid = styled.div`
     .background{
     background-image: url('https://images.pexels.com/photos/3076510/pexels-photo-3076510.jpeg?cs=srgb&dl=pexels-jonathan-borba-3076510.jpg&fm=jpg');
     background-size: cover;
     background-repeat: no-repeat;
     height: 100vh;
     width: 100vw;
}

`;