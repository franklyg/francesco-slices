import React, { useState } from 'react';
import { array, shape } from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';

const Navigation = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;
  transition: .5s all;
  z-index: 100;
  display: flex;
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
  font-family: 'Poppins', Arial; 

  // Animation Direction
  ${ props => {
    if(props.direction === 'top'){
      return `
        top: -100vh;
        &.active{
          top: 0;
        }
      `
    }
    if(props.direction === 'right'){
      return `
      right: -100vw;
      &.active{
        right: 0;
      }
      `
    }
    if(props.direction === 'bottom'){
      return `
      bottom: -100vh;
      &.active{
        bottom: 0;
      }
      `
    }
    if(props.direction === 'left'){
      return `
      left: -100vw;
      &.active{
        left: 0;
      }
      `
    }
  }}

  // Link Position
  ${props => {
    if(props.linkListPosition === 'top'){
      return`
        align-items: flex-start;
      `;
    }
    if(props.linkListPosition === 'center'){
      return`
        align-items: center;
      `;
    }
    if(props.linkListPosition === 'bottom'){
      return`
        align-items: flex-end;
      `;
    }
  }}

`;

const HamburgerButton = styled.div`
  position: fixed;
  top: 1rem;
  width: 1.75rem;
  z-index: 101;
  span{
    width: 100%;
    height: .25rem;
    margin: .25rem;
    display: block;
  }
  ${ props => {
    if(props.menuIconPosition === 'left'){
      return`
        left: 1rem;
      `;
    }
    if(props.menuIconPosition === 'center'){
      return`
        left: 0;
        right: 0;
        display: block;
        margin: 0;
      `;
    }
    if(props.menuIconPosition === 'right'){
      return`
        right: 1rem;
      `;
    }
  }}
`;

const LinkList = styled.ul`
  display: flex;
  flex-flow: column wrap;
`;

const LinkListItem = styled.li`
  height: 4rem;
  overflow: hidden;
  font-size: 4rem;
  margin: 2rem 0;
  line-height: .8;
`;

const LinkListItemLink = styled.a`
  text-decoration: none;
  transition: .5s all;
  transition-delay: .5s;
  display: block;
`;



const MySlice = ({ slice }) => {
  
  const [navToggle, navToggleState] = useState(false)

  return (
    <>
      <GlobalStyle />
      <HamburgerButton onClick={ () => navToggleState(!navToggle)} className={ navToggle ? 'active' : null }>
        <span style={{ background: slice.primary.menuIconColor }}></span>
        <span style={{ background: slice.primary.menuIconColor }}></span>
        <span style={{ background: slice.primary.menuIconColor }}></span>
      </HamburgerButton>
      <Navigation direction={ slice.primary.navigationDirection } className={ navToggle ? 'active' : null } style={{ background: slice.primary.navigationBackgroundColor }}>
        <LinkList>
          {slice.items.map((link, i) => 
            <LinkListItem key={i}>
              <LinkListItemLink href={link.navigationLink} style={{ color: slice.primary.navigationTextColor, transform: `${navToggle ? `translateY(0)` : `translateY(100%)` }` }}>{ link.navigationLinkCopy }</LinkListItemLink>
            </LinkListItem>
          )}
        </LinkList>
      </Navigation>
    </>
  );

} 

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
