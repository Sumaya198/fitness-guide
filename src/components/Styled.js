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

export const HomeGrid = styled.div`
     .background{
         position: relative;
         
         background-repeat: no-repeat;
         min-height: 100vh;
         background-position: center;
         width: 50%;
         display:flex;
        
         
         justify-content: flex-start;
         display: flex;
         align-items: center;
}
 .content{
     justify-content: flex-start;
     display: flex;
     padding: 100px;
     max-width: 600px;
 }
 .contentBx h2{
     font-size: 3em;
     color: #000;
     line-height: 1em;
 }
 .contentBx p{
     font-size: 1.1em;
     color: #000;
     font-weight: 300;
 }
`;

export const HomePageContent = styled.div`


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

/// About Cards
export const HomeCardWrapper = styled.div`
   body{
       margin: 0;
       padding: 0;
       display: flex;
       justify-content: center;
       align-items: center;
       min-height: 100vh;
   }
   
   .container{
       width: 1200px;
       height: auto;
       margin: 0 auto;
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
       grid-gap: 10px;
       padding: 10px;
       box-sizing: border-box;
   }
   .box{
       position: relative;
       background: yellow;
       padding: 20px 40px 40px;
       text-align: center;
       overflow: hidden;
       border-radius: 20px;
   }
   .box:nth-child(1){
       background: linear-gradient(45deg,#036eb7, #64eaff);
   }
   .box:nth-child(2){
       background: linear-gradient(45deg,#E91E63, #ed55ff);
   }
   .box:nth-child(3){
       background: linear-gradient(45deg,#086d35, #00ff72);
   }

   .box h2 {
       position: relative;
       margin: 0;
       padding: 0;
       font-size: 100px;
       color: #fff;
       z-index: 1;
       opacity: 0.4;
   }

   .box h3 {
       margin: 0;
       padding: 0;
       color: #fff;
       font-size: 24px;
       text-transform: uppercase;
   }

   .box p {
       margin: 0;
       padding: 0;
       color: #fff;
       font-size: 18px;
   }
`;

//toggle button

export const ToggleBtn = styled.div`

.storybook {
	width: 100%;
	color: #708090;
	height: 100%;
	
	display: flex;
  justify-content: center;
  align-items: center;
	flex-flow: column;
	text-align: center;
}

#storybook {
	display: block;
}

.ToggleSwitch {
	position: relative;
	width: 5rem;
	height: 2.35rem;
	display: inline-block;
	
	&.ToggleSwitch__rounded {
		.Slider {
			border-radius: 15rem;
			background: #eceff1;
			border: 1px solid #A0A0A0;
			
			&:before {
				border-radius: 50%;
			}
		}
	}
	
	.ToggleSwitch__wrapper {
		position: relative;
		width: 5rem;
		height: 2.35rem;
		
		.Slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			transition: .4s ease;
			
			&:before {
				width: 2.45rem;
				height: 2.45rem;
				position: absolute;
				background: #fff;
				content: '';
				margin: 0;
				padding: 0;
				top: 50%;
				left: 0.10rem;
				transform: translateY(-50%);
				transition: .4s;
				cursor: pointer;
				box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
			}
			
			&.isChecked {
				background: #fff;
				
				&:before {
					left: calc(100% - 0.10rem - 2.45rem);
					background: #0099ff;
				}
			}
		}
	}
}
`;