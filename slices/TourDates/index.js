import React from 'react';
import { array, shape } from 'prop-types';
import { RichText, Link } from 'prismic-reactjs';
import styled from 'styled-components'
import GlobalStyle from '../../styles/global';
import { Container, FontSizing, Shadows } from '../../styles/theme';

const TourDatesParent = styled.section`
  padding: 4rem 0;
  background: ${props => props.tourDatesBackground};
`;
const TourDatesTitle = styled.div`
  color: ${props => props.tourDatesTitleColor};
  margin: 0 0 4rem;
  font-size: 3.25rem;
  line-height: 1;
  text-align: center;
  text-transform: capitalize;
`;
const TourDatesItem = styled.div`
  background: ${props => props.tourDatesItemBackground};
  color: ${props => props.tourDatesItemTextColor};
  display: grid;
  align-items: center;
  box-shadow: 0 5px 10px 2px rgba(0,0,0,.07), 0 0px 5px 0px rgba(0,0,0,.1);
  border-radius: 15px;
  margin: 0 0 1rem;
  font-size: 1.25rem;
  padding: .75rem 1rem;
  transform: translateY(0);
  transition: .25s;
  &:hover{
    transform: translateY(-.05rem);
    box-shadow: 0 3px 7px 2px rgba(0,0,0,.05), 0 0px 5px 0px rgba(0,0,0,.1);
  }
  @media(min-width: 736px){
    grid-template-columns: 15% 20% 40% 20%;
    grid-template-areas: auto;
  }
  p{
    padding: 0 1rem;
  }
`;
const TourDatesDate = styled.div`
  margin: .5rem 0;
  @media(min-width: 736px){
    margin: .15rem 0;
  }
`;
const TourDatesLocation = styled.div`
  margin: .5rem 0;
  @media(min-width: 736px){
    margin: .15rem 0;
  }  
`;
const TourDatesTime = styled.div`
  margin: .5rem 0;
  @media(min-width: 736px){
    margin: .15rem 0;
  }
`;
const TourDatesCTALinkParent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: .5rem 0;
  @media(min-width: 736px){
    margin: .15rem 0;
  }
`;
const CTALink = styled.a`
  background: ${props => props.tourDatesCTABackground};
  color: ${props => props.tourDatesCTATextColor};
  text-decoration: none;
  text-align: center;
  border-radius: 2px;
  font-weight: 600;
  font-size: 1.25rem;
  padding: 1rem 2rem;
  box-shadow: 0 5px 10px 2px rgba(0,0,0,.07), 0 0px 5px 0px rgba(0,0,0,.1);
  align-self: flex-end;
  display: table;
  width: 100%;
`

const TourDates = ({ slice }) => (
  <>
    <GlobalStyle />
    <TourDatesParent tourDatesBackground={ slice.primary.tourDatesBackground }>
      <Container>
        <div className="tour-dates">
          <TourDatesTitle tourDatesTitleColor={ slice.primary.tourDatesTitleColor }>
            <RichText render={ slice.primary.title } />
          </TourDatesTitle>
          <div className="tour-dates">
            {
              slice.items.map( (item, i) => (
                <>
                  <TourDatesItem key={i} tourDatesItemBackground={ slice.primary.tourDatesItemBackground } tourDatesItemTextColor={ slice.primary.tourDatesItemTextColor }>
                    {/* TourDate Date */}
                    <TourDatesDate>
                      <p>
                        { 
                          item.date
                        }
                      </p>
                    </TourDatesDate>
                    {/* TourDate Time */}
                    <TourDatesTime>
                      <p>{ item.time }</p>
                    </TourDatesTime>
                    {/* TourDate Location*/}
                    <TourDatesLocation>
                      <p>{ item.location }</p>
                    </TourDatesLocation>
                    {/* TourDate CTA*/}
                    <TourDatesCTALinkParent>
                      <CTALink href={item.ticketsLink.url} tourDatesCTABackground={ slice.primary.tourDatesCTABackground } tourDatesCTATextColor={ slice.primary.tourDatesCTATextColor }>
                        { item.tickets }
                      </CTALink>
                    </TourDatesCTALinkParent>

                  </TourDatesItem>
                </>
              ))
            }
          </div>
        </div>   
      </Container>
    </TourDatesParent>
  </>
);

TourDates.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TourDates;
