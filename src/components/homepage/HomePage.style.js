import React from 'react'
import { HomeGrid, HomePageContent, Button } from '../Styled';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (      
               <HomeGrid>
                <div className="background">
                   <div className="content">
                    <div className="contentBx">
                       <h2>Build Perfect Body
                       With Clean Mind</h2>
                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam fuga sequi ratione delectus est repellendus laborum consequatur, velit dolor aliquam aliquid, labore dolorum ab a at corrupti dicta molestias quod! </p>
                       <Link to="/exercise"><Button type="button">Get Started</Button></Link>
                    </div>      
                   </div>          
                </div>       
            </HomeGrid>        
          )
        }

export default HomePage
