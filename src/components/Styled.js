import styled from 'styled-components';

export const FlexGrid = styled.div`
   display: inline-flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   margin-left: 50px;
`;

export const SearchCard = styled.div`
   width: 300px;
   height: 100%auto;
   margin: 0 50px 40px;

   .img-wrapper{
       width: 100%;
       border-radius: 40px;
       height: 400px;
       overflow: hidden;
       border: 1px solid #ddd;

       img {
           object-fit: cover;
           height: 100%;
           width: 100%;
       }

   }

   h1 {
       margin: 10px 0;
       font-size: 21px;
   }

`;