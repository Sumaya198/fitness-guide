import styled from 'styled-components';


/*export const FlexMain = styled.main`
  display: grid;
  grid-template: 50px / auto auto auto;
  grid-gap: 10px;
  background-image:url('https://images.pexels.com/photos/1709993/pexels-photo-1709993.jpeg?cs=srgb&dl=pexels-pok-rie-1709993.jpg&fm=jpg');
  
  background-size: cover;
  background-attachment: fixed;
  

  
  
  font-size: 30px;

`;


export const CCC = styled.div`
  *{
      margin:0;
      padding: 0;
      box-sizing: border-box;
      font-size: 62.5%
  }
  min-height: 100%;
  width: 100%;
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(5,max-content);
  row-gap: 0.5rem;
`;

export const Main2 = styled.div`
  grid-column: 1/-1;
  grid-rows: 3 / 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
`;

export const SectionMain = styled.section`
  width: 50%;
  padding: 2px;
  min-height: 100%;

 
`;


export const MainContainer = styled.div`
width: 1440px;
min-width: 1440px;
margin: 0 auto;

@media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

`;

export const HeroInner = styled.div`
 /* display: flex;
 align-items: center;
 justify-content: space-between;
 margin: 0 24px;
 height: 100vh;

 @media screen and (max-width: 768px) {
    display: block;
  } 

  grid-column: 1/-1;
  grid-rows: 3 / 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;

`;*/


/*export const HeroImages = styled.div`
width: 90%;
height: 100vh;
position: absolute;

.hero-images-inner{
    .hero-image {
        position: absolute;
        
        &.boy{
            bottom: 84px;
              width: 52%;
              height: 65%;
              
        }
        img {
            position: absolute;
            top: -70px;
              left: 0px;
              right: 0;
              bottom: 0;
              width: 100%;
              
        }
    }

}
@media (min-width: 768px) {
    img{
    opacity: 1;
    }
  }



`;

export const HeroImageInner = styled.div`
 width: 600px;
 margin: 0 auto;

 

 h1{
     font-weight: 600;
     font-size: 42px;
     margin-bottom: 24px;
 }

 @media screen and (min-width: 1210px) {
    margin-right: 80px;
  }

  @media (min-width: 1216px) {
   display: block;
  }
`;






export const ContentSection = styled.section`
  width: 50%;
  padding: 12px;
  min-height: 100%;

  .flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

  #app-titles {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 36px;
  background-size: cover;
}

#home-content {
  height: 100%;
  align-items: center;
}

.background-img{
  width: 90%;
  margin: 0 5%; 
}

  @media screen and (max-width: 576px) {
  width: wrap;
  
  }

  @media screen and (max-width: 992px) and (max-width: 1200px) {
    min-height: calc(100vh - 120px);
    
  }
  @media screen and (max-width: 1200px){
    min-height: calc(100vh - 120px);
    .background-img{
    display: flex;
  }
  }

`;*/

/*export const HeroContentLine = styled.div`
  margin: 0;
  height: 44px;

  @media screen and (min-width: 1210px) {

    margin-right: 80px;

    .background-img{
    display: flex;
  }
  }


`;

export const HeroContent = styled.div`
padding: 6rem;
  color: white;
 
  font-family: sans-serif;
  text-transform: uppercase;
  border-radius: .2rem;
    
  
  display: grid;
  justify-content: center;
  align-items: center;
  
  box-shadow: 0 1rem 4rem rgba(0,0,0,.25);
  transition: all .2s;
  
  .main2 {
    grid-column: 1 / 4;
    background-color: #847996;
    
     @media only screen and (max-width: 41.875em) {  //670px / 1600px
        grid-column: 1 / -1;
        
    }
  }
  
    .aside {
    grid-column: 4 / 5;
    background-color: purple;
      @media only screen and (max-width: 41.875em) { //670px / 1600px
        grid-column: 1 / -1;
    }
  }
  
`;


export const HeroContentInner = styled.div`
 width: 400px;
 margin: 0 auto;
 color: #323232;
 justify-content: left;
 align-items: left;

 h1{
     font-weight: 600;
     font-size: 42px;
     margin-bottom: 24px;
 }

 @media screen and (min-width: 1210px) {
    margin-right: 80px;
  }
`;

export const Text = styled.p`
font-size: 16px;
line-height: 27px;
font-weight: 300;
padding-right: 18px;
margin-bottom: 56px;

`;

export const Hero = styled.div`
 visibility: hidden;
   body{
       padding: 0;
       margin: 0;
   }

   height: 100vh;
`;*/






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
    img{
        display: none;
    } 
}
`;


///cards

export const CardContainer = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(1fr 1fr));
   
align-items: stretch;
    grid-gap: 1em;
    @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr); 
    }
    
`;

export const InnerCard = styled.div`
border: 1px solid #ccc;
box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
text-align: center;

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

 h1{
     font-weight: 600;
     font-size: 42px;
     margin-bottom: 24px;
 }

 
`;
export const Text = styled.p`
font-size: 16px;
line-height: 27px;
font-weight: 300;
padding-right: 18px;
margin-bottom: 56px;

`;

export const LogoImg = styled.img`
 width: 100px;
 margin-left: 70px;
`;

export const Footer = styled.div`
 background:#000;
`;






