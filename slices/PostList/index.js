import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';
import { Container } from '../../styles/theme';

const PostCardsParent = styled.section`
  padding: 2rem;
`;
const PostCardsInner = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
  font-family: 'Poppins', Arial; 
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1.75rem;
  row-gap: 1.75rem;
  @media(min-width: 768px){
    grid-template-columns: 1fr 1fr;
  }
  @media(min-width: 1024px){
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const PostListTitle = styled.div`
  margin: 0 0 2rem;
  font-size: 3.25rem;
  line-height: 1;
  text-align: center;
  text-transform: capitalize;
`;
const PostListSubTitle = styled.div`
  margin: 0 0 2rem;
  font-size: 2.25rem;
  line-height: 1;
  text-align: center;
  text-transform: capitalize;
`;
const PostCard = styled.a`
  box-shadow: 0 5px 10px 2px rgba(0,0,0,.07), 0 0px 5px 0px rgba(0,0,0,.1);
  border-radius: 10px;
  text-decoration: none;
  overflow: hidden;
  color: #000;
  position: relative;
  display: block;
`;
const PostCardImageHolder = styled.div`
  backdrop-filter: blur(8px);
  height: 100%;
  display: flex;
  flex-flow: column;
  border-radius: inherit;
`;
const PostOverlayImage = styled.img`
  width: 70%;
  display: block;
  margin: 4rem auto;
  box-shadow: 0 5px 10px 2px rgba(0,0,0,.07), 0 0px 5px 0px rgba(0,0,0,.1);
  transform: translateY(0);
  transition: all .5s cubic-bezier(0,1.02,1,1);
  ${PostCard}:hover &{
    transform: translateY(-.25rem);
  }
`;
const PostCardTitle = styled.div`
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 0;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,.25);
  font-size: 1.4rem;
  line-height: 1.1;
  text-align: center;
  transform: translateY(0);
  transition: all .5s cubic-bezier(0,1.02,1,1);
  transition-delay: .1s;
  ${PostCard}:hover &{
    transform: translateY(-.45rem)
  }
`;
const PostCardCopy = styled.div`
  padding: 0 1rem;
  display: flex;
  position: absolute;
  width: calc(100% - 2rem);
  bottom: -50%;
  transition: all .5s cubic-bezier(0,1.02,1,1);
  transition-delay: .5s;
  font-size: .75rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,.25);
  ${PostCard}:hover &{
    bottom: 5%;
  }
`;

const PostList = ({ slice }) => (
  <>
    <GlobalStyle />
    <PostCardsParent>
      <Container>
        <PostListTitle>
          <RichText render={slice.primary.title}/>
        </PostListTitle>
        <PostListSubTitle>
          <RichText render={slice.primary.description}/>
        </PostListSubTitle>
        <PostCardsInner>
          {
            slice.items.map((post, i) => 
              <PostCard href={ post.postLink.url } key={i} style={{ background: `url(${post.postImage.url})` }}>
                <PostCardImageHolder>
                  <PostOverlayImage src={post.postImage.url} alt={post.postTitle} />
                  <PostCardTitle>
                    <RichText render={post.postTitle}/>
                  </PostCardTitle>
                  <PostCardCopy>
                    <RichText render={post.postCopy}/>
                  </PostCardCopy>
                </PostCardImageHolder>
              </PostCard>
            )
          }
        </PostCardsInner>
      </Container>
    </PostCardsParent>
  </>
);

PostList.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostList;
