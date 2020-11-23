import React, {useEffect, useState, useRef} from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';
import { Container } from '../../styles/theme';

const HeroParent = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
  font-family: 'Poppins', Arial; 
  width: 100%;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  transform: translateZ(0px);
  background: url(${props => props.backgroundImage});
  position: relative;
  padding: 2rem 0;
  @media(min-width: 1024px){
    height: 100vh;
    padding: 0;
  }
  ${Container}  {
    height: inherit;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
`;
const HeroHeader = styled.div`
  font-size: 3rem;
  margin: 0 0 2rem;
  text-shadow: 0 1px rgba(0,0,0,.2);
  text-align: center;
  line-height: 1;
  position: relative;
  z-index: 1;
  color: ${props => props.headerColor};
  @media(min-width: 736px){
    font-size: 4.5rem;
  }
`;
const HeroSubHeader = styled.div`
  font-size: 2.25rem;
  color: white;
  text-shadow: 0 2px 2px rgba(0,0,0,.3);
  text-align: center;
  line-height: 1;
  position: relative;
  z-index: 1;
  color: ${props => props.subHeaderColor};
  @media(min-width: 736px){
    font-size: 3.75rem;
  }
`;
const HeroCTAButton = styled.a`
  background: ${props => props.buttonBackground};
  text-decoration: none;
  display: table;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.buttonTextColor};
  margin: 1.5rem 0 0;
  padding: 1.5rem 3rem;
  border-radius: 100px;
  box-shadow: 0 5px 10px 2px rgba(0,0,0,.07), 0 0px 5px 0px rgba(0,0,0,.1);
  transform: translateY(0);
  transition: .25s;
  text-align: center;
  position: relative;
  z-index: 1;
  &:hover{
    transform: translateY(-.05rem);
    box-shadow: 0 3px 7px 2px rgba(0,0,0,.05), 0 0px 5px 0px rgba(0,0,0,.1);
  }
  @media(min-width: 736px){
    font-size: 2.25rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.4);
  display: block;
  margin: auto;
  z-index: 0;
`;


const PageHero = ({ slice }) => {
  
  const heroParent = useRef();

  useEffect(() => {
    console.log(slice)
    if(slice.primary.parallaxSwitch){
      window.addEventListener('scroll', parallaxOnScroll)
    }
    return () => {
      if(slice.primary.parallaxSwitch){
        window.removeEventListener('scroll', parallaxOnScroll)
      }
    }
  })

  const parallaxOnScroll = () => {
      var REF_ELEM = heroParent.current // Ref
      var WINDOW_OFFSET = window.pageYOffset;
      var ELEMENT_POSITION = REF_ELEM.offsetTop;
      var VELOCITY = 7;
      
      var calculation = (WINDOW_OFFSET- ELEMENT_POSITION) / VELOCITY;
      if (calculation > 0) {
        calculation = -calculation;
      }
      REF_ELEM.style.backgroundPosition = "0% " + calculation + "px"; 
  }

  return (
    <>
      <GlobalStyle />
      <HeroParent ref={heroParent} backgroundImage={ slice.primary.backgroundImage.url }>
        <Container>
          <HeroHeader headerColor={ slice.primary.headerTextColor } >
            <RichText render={slice.primary.title}/>
          </HeroHeader>
          <HeroSubHeader subHeaderColor={ slice.primary.subHeaderTextColor }>
            <RichText render={slice.primary.description}/>
          </HeroSubHeader>
          {
            slice.primary.ctaSwitch ? 
              <HeroCTAButton href={ slice.primary.ctaLink.url } buttonBackground={ slice.primary.buttonBackground } buttonTextColor={ slice.primary.buttonTextColor } >
                {slice.primary.ctaCopy}
              </HeroCTAButton> 
            : null
          }
        </Container>
        <Overlay />
      </HeroParent>
    </>
  )

};

PageHero.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PageHero;
