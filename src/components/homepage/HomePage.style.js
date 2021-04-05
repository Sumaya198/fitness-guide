import React from 'react'
import { Button } from '../Styled';
import { Link } from 'react-router-dom';
//import styled from 'styled-components';
//import { Marginer } from '../Margina';
import img from '../bggg-01.png'

/*const TopContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  padding: 0;
  background-image:url('https://dev.baileygp.com/image-tests/image-test-1200.jpg');
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;

  @media (min-width: 768px){
   min-width: 10vw;
  }
  
  @media (min-width: 300px) { 
    max-width: 800px;
  }

 
`;



const BackgroundFilter = styled.div`
   width: 100%;
   height: 100%;
   //background-color: rgba(55, 55, 55, 0.89);
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Text = styled.h1`
   font-size: 34px;
   font-weight: 500;
   line-height: 1.4;
   color: #000;
   margin: 40px;
   text-align: center;
`;*/

const HomePage = () => {
    return (      
        <div>
        <section className="about r-p" id="about" style={{ marginTop: '100px', height: '100vh'}}>
<div className="container">
  <div className="row">
  <div className="col-lg-6 mt-5 mt-lg-0" style={{padding: '50px'}}>
      <h2 style={{fontSize: '80px', fontFamily: 'Abril Fatface'}}>Get <span style={{color: '#009FE3'}}>fit</span></h2>
      <div style={{ fontFamily: 'Raleway', fontWeight: '700'}}>
      <p style={{fontSize: '18px', lineHeight: '32px' }}>Exercise not only changes your body. It changes your mind, your attitude and mood</p>
      <p style={{fontSize: '18px', lineHeight: '32px'}}>Whether you are starting your fitness journey or a pro athlete we got you covered. Explore our wide range of workouts. <span style={{fontWeight: '800'}}>Start today! Enjoy!</span></p>
      </div>
      <div>
      <Link to="/exercise"><Button type="button">Get Started</Button></Link>
      </div>
    </div>
  <div className="col-lg-6 animated way-fade-up">
      <img src={img} style={{width: '760px', height: '70vh', backgroundImage: 'cover', position: 'relative', right: '60px'}} className="profile-img" alt="profile"/>
    </div>
    
  </div>
</div>

</section>
    </div>

    )
}
export default HomePage

/*
 <HomeGrid>
                   <div className="home-container">
                <div className="background"></div>
                </div>
                   <div className="content">
                    <div className="contentBx">
                       <h1>Get Fit</h1>
                       <p>Do something today that your future self will thank you for </p>
                       <Link to="/exercise"><Button type="button">Get Started</Button></Link>
                    </div>      
                   </div>                 
            </HomeGrid>   */
