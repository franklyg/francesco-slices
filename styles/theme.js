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