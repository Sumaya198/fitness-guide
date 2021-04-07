import React, { useRef, useEffect } from 'react'
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import { Button } from '../Styled';
import { Link } from 'react-router-dom';
import GymSharkLogo from '../images/GymSharkLogo-01.png'
import GymMaleImg from '../images/image1Male-01.webp';
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Wrapper, Header, LogoImg, ImgSection, HeroContentInner, Text, Icon } from './Home.style';

const HomePage = () => {

  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let text = useRef(null);
  let tl = new TimelineLite({ delay: .8 })

  useEffect(() => {
    //image variables
    let tl = new TimelineLite({ delay: .8 })
    const boyImage = images.firstElementChild;


    const headlineFirst = content

    const contentP = text

    TweenMax.from(content, .8, { opacity: 0, x: 40, ease: Power3.easeOut })


    //parameters: target variable, duration and configurations you want to add i.e visibility
    TweenMax.to(app, 0, { css: { visibility: 'visible' } })
    //image animantion
    tl.from(boyImage, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
      .from(boyImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)

    tl.staggerFrom([headlineFirst.children], 1, {
      y: 44,
      ease: Power3.easeOut,
      delay: .8
    }, .15, 'Start')
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      
  }, [tl])

  return (

    <Wrapper ref={el => app = el}>
      <Header ref={el => content = el}>
        <LogoImg src={GymSharkLogo} alt="gymshark logo" />
        <HeroContentInner>
          <h1>
            <div className="Main">GET <span style={{ color: '#009FE3' }}>FIT</span></div>
            <div>With GymShark</div>
          </h1>
          <div ref={el => text = el}>
            <Text ref={el => text = el}>
              Each new day is a new opportunity to improve yourself. Take It. And make the most of it!

              Explore our wide range of exercises
             </Text>
            <Icon>
              <div className="font-icon"><a href="https://www.instagram.com/gymshark/"><FaInstagram /></a></div>
              <div className="font-icon"><a href="https://twitter.com/Gymshark?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaTwitter /></a></div>
            </Icon>
            <Link to="/exercise"><Button>Get Started</Button></Link>
          </div>
        </HeroContentInner>
      </Header>
      <ImgSection ref={el => images = el}>
        <img src={GymMaleImg} alt="lifting-club-model" />
      </ImgSection>
    </Wrapper>

  )
}


export default HomePage

