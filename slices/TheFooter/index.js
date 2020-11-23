import React from 'react';
import { array, shape } from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';
import { Container } from '../../styles/theme';

const FooterParent = styled.footer`
  display: 100%;
  padding: 1rem 1rem;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.footerBackground};
  color: ${props => props.footerTextColor};
`;
const FooterInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media(min-width: 1024px){
    grid-template-columns: 1fr 1fr;
  }
`;
const FooterCol = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
`;
const FooterLinkList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  margin: 1rem 0;
  @media(min-width: 1024px){
    flex: 1;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
`;
const FooterLinkListItem = styled.li`
  margin: 0 0 1rem 0;
  &:last-child{
    margin: 0;
  }
`

const TheFooter = ({ slice }) => (
  <>
    <GlobalStyle />
    <FooterParent footerBackground={ slice.primary.footerBackground } footerTextColor={ slice.primary.footerTextColor }>
      <Container>
        <FooterInner>
          <FooterCol>
            {slice.primary.brandName} &copy; All Rights Reserved
          </FooterCol>
          <FooterCol>
            <FooterLinkList>
              {
                slice.items.map((link, i) => 
                  <FooterLinkListItem key={i}>
                    <a href={link.footerLink}>{link.footerLinkCopy}</a>
                  </FooterLinkListItem>  
                )
              }
            </FooterLinkList>
          </FooterCol>
        </FooterInner>
      </Container>
    </FooterParent>
  </>
);

TheFooter.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TheFooter;
