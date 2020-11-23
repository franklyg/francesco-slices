import React, { useState } from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';
import { Container } from '../../styles/theme';

const FAQParent = styled.section`
  display: flex;
  flex-flow: column;
  min-height: 100%;
  padding: 2rem 0;
`;
const FAQItem = styled.div`
  box-shadow: 0 5px 10px 2px rgba(0,0,0,.07), 0 0px 5px 0px rgba(0,0,0,.1);
  margin: 0 0 3px;
  padding: 2rem 1rem;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  z-index: 1;
  transform: translateY(.5rem);
  background: ${ props => props.headerBackground };
  color: ${ props => props.headerColor };
`;
const FAQHeadingParent = styled.header`
  text-align: center;
`;
const FAQHeader = styled.div`
  font-size: 4rem;
  line-height: 1;
  margin: 0 0 2rem;
`;
const FAQSubText = styled.div`
  font-size: 2rem;
  line-height: 1;
  margin: 0 0 2rem;
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
  border-radius: 0 0 5px 5px;
  font-size: 1rem;
  line-height: 1;
  background: ${ props => props.copyBackground };
  color: ${ props => props.copyColor };
`;

const FAQSlice = ({ slice }) => {

  const [faq, faqState] = useState({ active: null });
  
  return (
    <>
      <GlobalStyle />
      <FAQParent>
        <Container>
          <FAQHeadingParent>
            <FAQHeader>
              <RichText render={ slice.primary.title }/>
            </FAQHeader>
            <FAQSubText>
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
