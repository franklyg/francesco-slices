import React, { useState } from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';
import { Container, Shadows, FontSizing } from '../../styles/theme';

const FAQParent = styled.section`
  display: flex;
  flex-flow: column;
  min-height: 100%;
  padding: 4rem 0;
  background: ${props => props.faqBackground};
`;
const FAQHeadingParent = styled.header`
  text-align: center;
`;
const FAQHeader = styled.div`
  color: ${props => props.faqHeaderTextColor};
  font-size: ${FontSizing.headingMedium};
  line-height: 1;
  margin: 0 0 2rem;
`;
const FAQSubText = styled.div`
  color: ${props => props.faqSubHeaderTextColor};
  font-size: 2rem;
  line-height: 1;
  margin: 0 0 2rem;
`;
const FAQItem = styled.div`
  background: ${ props => props.headerBackground };
  color: ${ props => props.headerColor };
  box-shadow: ${Shadows.standardShadow};
  font-size: ${ FontSizing.medium };
  margin: 0 0 3px;
  padding: 1.35rem 1rem;
  line-height: 1;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  z-index: 1;
  transform: translateY(.5rem);
`;
const FAQCopy = styled.div`
  ${ props => {
      if(props.toggle){
        console.log(props.toggle)
        return `
          overflow: auto;
          height: auto;
          padding: 2rem 1rem;
        `;
      }else{
        return `
          overflow: hidden;
          height: 0;
        `;
      }
    }
  }
  background: ${ props => props.copyBackground };
  color: ${ props => props.copyColor };
  border-radius: 0 0 5px 5px;
  font-size: ${FontSizing.medium};
  line-height: 1;
  position: relative;
  z-index: 0;
`;

const FAQSlice = ({ slice }) => {

  const [faq, faqState] = useState({ active: null });
  
  return (
    <>
      <GlobalStyle />
      <FAQParent faqBackground={slice.primary.faqBackground}>
        <Container>
          <FAQHeadingParent>
            <FAQHeader faqHeaderTextColor={ slice.primary.faqHeaderTextColor }>
              <RichText render={ slice.primary.title }/>
            </FAQHeader>
            <FAQSubText faqSubHeaderTextColor={ slice.primary.faqSubHeaderTextColor }>
              <RichText render={ slice.primary.description }/>
            </FAQSubText>
          </FAQHeadingParent>

          {
            slice.items.map((post, i) => 
            <div key={i}>
              <FAQItem onClick={() => {
                  const faqClickState = { active: i }
                  faqState(faqClickState); // Set i to key value
                  
                  if (faq.active === i) {
                    const faqClickState = { active: null } // Reset  i to null
                    faqState(faqClickState);
                  }
                }}  
                key={i}
                headerBackground={ slice.primary.faqTitleBackground }
                headerColor={ slice.primary.faqTitleTextColor } 
                >
                  <RichText render={post.faqTitle}/>
                </FAQItem>
                <FAQCopy toggle={ faq.active === i } copyBackground={ slice.primary.faqCopyBackground } copyColor={  slice.primary.faqCopyTextColor }>
                  <RichText render={post.faqCopy} />
                </FAQCopy>
            </div>
            )
          }

        </Container>
      </FAQParent>
    </>
  );

}
 FAQSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FAQSlice;
