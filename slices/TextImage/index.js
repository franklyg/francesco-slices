import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';

const TextImageParent = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
  font-family: 'Poppins', Arial; 
  display: grid;
  grid-template-columns: 1fr;
  @media(min-width: 1024px){
    grid-template-columns: 1fr 1fr;
  }
`;
const Column = styled.div`
  display: flex;
  flex-flow: column;
  align-self: flex-start;
  overflow: hidden;
  background: ${props => props.copyBackgroundColor};
  @media(min-width: 1024px){
    position: sticky;
    top: 0;
  }
`
const ImageParent = styled.div`
  width: 100%;
  height: 50vh;
  overflow: hidden;
  margin: auto;
  @media(min-width: 1024px){
    height: 100vh;
    position: sticky;
    top: 0;
  }
`;
const Image = styled.img`
  height: 100vh;
  min-width: 100%;
  object-fit: cover;
  margin: auto;
`;
const CopyParent = styled.div`
padding: 2rem 1rem;
  @media(min-width: 736px){
    padding: 2rem 4rem;
  }
`;
const CopyHeader = styled.div`
  font-size: 3.25rem;
  line-height: 1.25;
  margin: 0 0 2rem;
  color: ${props => props.copyTextColor};
  *{
    margin: 0;
  }
`;
const CopyText = styled.div`
  font-size: 1.25rem;
  line-height: 1.9;
  color: ${props => props.copyTextColor};
`;
const Button = styled.a`
  background: ${props => props.buttonBackground};
  text-decoration: none;
  display: table;
  font-size: 1.75rem;
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
`;

const TextImage = ({ slice }) => (
  <>
  <GlobalStyle />
  <TextImageParent>
    <Column>
      <ImageParent>
        <Image src={ slice.primary.image.url } />
      </ImageParent>
    </Column>
    <Column copyBackgroundColor={ slice.primary.copyBackground }>
      <CopyParent>
        <CopyHeader copyTextColor={ slice.primary.copyTextColor }>
          <RichText render={ slice.primary.title } />
        </CopyHeader>
        <CopyText copyTextColor={ slice.primary.copyTextColor }>
          <RichText render={ slice.primary.description } />
        </CopyText>
        <Button href={ slice.primary.buttonLink.url } buttonTextColor={ slice.primary.buttonTextColor } buttonBackground={ slice.primary.buttonBackground }>{ slice.primary.buttonText[0].text }</Button>
      </CopyParent>
    </Column>
  </TextImageParent>
  </>
);

TextImage.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TextImage;
