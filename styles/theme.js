import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    width: 100%;
    padding: 0 .5rem;
    
    @media(min-width: 1024px){
        width: 1000px;
    }
    @media(min-width: 1280px){
        width: 1140px;
    }
    @media(min-width: 1440px){
        width: 1400px
    }
`;

export const Shadows = {
    standardShadow: `0 5px 10px 2px rgba(0,0,0,.07), 0 0px 5px 0px rgba(0,0,0,.1)`,
    standardShadowOnHover: `0 3px 7px 2px rgba(0,0,0,.05), 0 0px 5px 0px rgba(0,0,0,.1);`
}

export const FontSizing = {
    small: `1rem`,
    medium: `1.25rem`,
    large: `1.5rem`,
    subHeadingSmall: `1.5rem`,
    subHeadingMedium: `2rem`,
    subHeadingLarge: `2.5rem`,
    headingSmall: `2.25rem`,
    headingMedium: `3rem`,
    headingLarge: `3.5rem`,
}