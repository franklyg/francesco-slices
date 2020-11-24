import React from 'react';
import PropTypes, { array, shape } from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';
import { Container, Shadows, FontSizing } from '../../styles/theme';

const BannerParent = styled.section`
  background: ${props => props.bannerBackgroundColor};
  width: 100%;
  padding: 1.5rem 0;
`;
const BannerParentChild = styled.div`
  display: flex;
  flex-flow: column;  
  justify-content: center;
  align-items: center;
`;
const BannerHeader = styled.h3`
  font-size: ${ FontSizing.headingMedium };
  font-weight: 600;
  line-height: 1;
  margin: 0 0 1rem;
  text-align: center; 
`;
const BannerSubText = styled.p`
  font-size: ${ FontSizing.subHeadingMedium };
  font-weight: 200;
  line-height: 1;
  margin: 0 0 1rem;
`;
const BannerButton = styled.a`
  box-shadow: ${Shadows.standardShadow};
  font-size: ${FontSizing.medium};
  font-weight: 600;
  text-decoration: none;
  display: table;
  text-align: center;
  margin: 1rem 0 0;
  padding: 1.5rem 3rem;
  border-radius: 100px;
`;

const CTABanner = ({ slice }) => {
  return(
    <>
      <GlobalStyle />
      <BannerParent bannerBackgroundColor={ slice.primary.bannerBackgroundColor } >
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

