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
  background: ${props => props.navigationBackgroundColor };
  
  ${ props => {
    if(props.direction){
      return `
      left: -100vw;
      &.active{
        left: 0;
      }
      `
    }else{
      return `
      right: -100vw;
      &.active{
        right: 0;
      }
      `
    }
  }}

  ${props => {
    if(props.verticalLinkListPosition){
      return`
        align-items: flex-start;
      `
    }else{
      return`
        align-items: flex-end;
      `
    }
  }}
  
  ${props => {
    if(props.horizontalLinkListPosition){
      return`
        text-align: left;
      `
    }else{
      return`
        text-align: right;
      `
    }
  }}

`;
const HamburgerButton = styled.div`
  position: fixed;
  top: 1rem;
  width: 1.75rem;
  z-index: 101;
  span{
    background: ${props => props.menuIconColor};
    width: 100%;
    height: .2rem;
    margin: .3rem;
    display: block;
  }
  ${ props => {
    if(props.menuIconPosition){
      return`
        left: 1rem;
      `
    }else{
      return`
        right: 1rem;
      `
    }
  }}

`;
const LinkList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  padding: 0 2rem;
`;
const LinkListItem = styled.li`
  height: 3rem;
  overflow: hidden;
  font-size: 3rem;
  margin: 1rem 0;
  line-height: .8;
`;
const LinkListItemLink = styled.a`
  text-decoration: none;
  transition: .5s all;
  transition-delay: .5s;
  display: block;
  color: ${props =>  props.navigationTextColor}
`;

const TheNavigation = ({ slice }) => {
  
  const [navToggle, navToggleState] = useState(false);

  return (
    <>
      <GlobalStyle />
      <HamburgerButton onClick={ () => navToggleState(!navToggle)} className={ navToggle ? 'active' : null } menuIconPosition={ slice.primary.menuIconPosition } menuIconColor={ slice.primary.menuIconColor }>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>
      <Navigation direction={ slice.primary.navigationDirection } className={ navToggle ? 'active' : null } navigationBackgroundColor={ slice.primary.navigationBackgroundColor } verticalLinkListPosition={ slice.primary.verticalLinksPosition } horizontalLinkListPosition={ slice.primary.horizontalLinksPosition }>
        <LinkList>
          {slice.items.map((link, i) => 
            <LinkListItem key={i}>
              <LinkListItemLink href={link.navigationLink.url} navigationTextColor={ slice.primary.navigationTextColor } style={{ transform: `${navToggle ? `translateY(0)` : `translateY(5rem)` }` }}>{ link.navigationLinkCopy }</LinkListItemLink>
            </LinkListItem>
          )}
        </LinkList>
      </Navigation>
    </>
  );

} 

TheNavigation.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TheNavigation;
