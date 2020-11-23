import React from 'react';
import PropTypes, { array, shape } from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';
import { Container } from '../../styles/theme';

const BannerParent = styled.section`
  width: 100%;
  padding: 3rem 0;
  background: ${props => props.bannerBackgroundColor}
`;
const BannerParentChild = styled.div`
  display: flex;
  flex-flow: column;  
  justify-content: center;
  align-items: center;
`;
const BannerHeader = styled.h3`
  font-size: 3.25rem;
  font-weight: 600;
  line-height: 1;
  margin: 0 0 1rem;
  text-align: center; 
`;
const BannerSubText = styled.p`
  font-size: 2rem;
  font-weight: 200;
  line-height: 1;
  margin: 0 0 1rem;
`;
const BannerButton = styled.a`
  text-decoration: none;
  display: table;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin: 1.5rem 0 0;
  padding: 1.5rem 3rem;
  border-radius: 100px;
  box-shadow: 0 5px 10px 2px rgba(0,0,0,.07), 0 0px 5px 0px rgba(0,0,0,.1);
`;

const CTABanner = ({ slice, titleBackgroundColor }) => {

  return(
    <>
      <GlobalStyle />
      <BannerParent bannerBackgroundColor={ slice.primary.bannerBackgroundColor || titleBackgroundColor } >
        <Container>
          <BannerParentChild>
            <BannerHeader>
              <span style={{ color: slice.primary.bannerHeaderColor }}>{ slice.primary.bannerHeader }</span>
            </BannerHeader>
            <BannerSubText>
              <span style={{ color: slice.primary.bannerSubTextColor }}>{ slice.primary.bannerSubText }</span>
            </BannerSubText>
            {
              slice.primary.showCTABannerButton ?
              <BannerButton href={ slice.primary.bannerButtonLink } style={{ background: slice.primary.bannerButtonColor }}>
                <span style={{ color: slice.primary.bannerButtonCopyColor }}>{ slice.primary.bannerButtonLinkCopy }</span>
              </BannerButton>
              : null
            }
          </BannerParentChild>
        </Container>
      </BannerParent>
    </>
  )
}

export default CTABanner;

CTABanner.propTypes = {
  slice: shape({
    primary: shape({
      bannerBackgroundColor: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

