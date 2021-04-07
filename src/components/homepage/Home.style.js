import styled from 'styled-components';

export const Wrapper = styled.div`

display: grid;
    height: 100vh;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
    "main main next next"
    "main main next next ";

    gap: 1.5rem;
    font-weight: 800;

    @media only screen and (max-width: 871px)
{
        grid-template-columns: 1fr;
        grid-template-rows: 0.4fr 0.8fr 1fr;
        grid-template-areas: 
        "main" 
        "next";
    
}
`;

export const Header = styled.div `
grid-area: main;
margin-top: 100px;
`;

export const ImgSection = styled.div`
grid-area: next;
@media only screen and (max-width: 871px)
{
  width: 300px;
}
`;

export const HeroContentLine = styled.div`
  margin: 0;
  height: 44px;

  @media screen and (min-width: 1210px) {

    margin-right: 80px;

    .background-img{
    display: flex;
  }
  }

`;

export const CardText = styled.div`

font-size: 48px;
  line-height: 70px;
  height: 80px;
  width: 80px;
  border: 6px solid white;
  border-radius: 50%;
  background-color: #007bff;
  text-align: center;
  color: white;
  margin-top: -36px;
`

export const HeroContentInner = styled.div`
 width: 400px;
 margin: 0 auto;
 color: #323232;
 justify-content: left;
 align-items: left;

 h1.Main{
     font-weight: 600;
     font-size: 42px;
     margin-bottom: 24px;
     font-family: 'Roboto', sans-serif;
 }

 
`;
export const Text = styled.p`
font-size: 20px;
line-height: 27px;
font-weight: 300;
padding-right: 18px;
margin-bottom: 6px;
font-family: 'Raleway', sans-serif;


`;

export const LogoImg = styled.img`
 width: 100px;
 margin-left: 70px;
`;

export const Footer = styled.div`
 background:#000;
`;

export const Icon = styled.div`
font-size: 20px;
color: blue;
display: flex;
padding:10px;
line-height: 40px;
margin: 0 6px 0;
.font-icon{
  margin: 0 20px 9px 20px;
}
`;





