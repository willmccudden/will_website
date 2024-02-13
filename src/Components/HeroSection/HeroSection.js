import styled from "styled-components";
import img from './HeroPhoto.jpg';


const HeroSection = styled.section`
  background: 
  url(${img}) ;
  background-position: center, top left;
  background-size: cover, cover;
  height: fit-content;
  color: #fafafc;
  padding: 2rem 4rem 14rem;
  

  .heroInner {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 6rem
  }
  span {
    max-width: 50%;
  }
  h1 {
    font-weight: 900;
    color: white;
    font-size: clamp(3rem, 8vw, 4rem);
    font-family: Manrope;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
`;

export default HeroSection;