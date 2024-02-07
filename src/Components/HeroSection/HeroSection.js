import styled from "styled-components";
import img from './HeroPhoto.jpg';


const HeroSection = styled.section`
  background: 
  // linear-gradient(to bottom, #d3e8ed 1rem, transparent 4rem), 
  // linear-gradient(to top, white 1rem, transparent 5rem),
  url(${img}) ;
  background-position: center, top left;
  background-size: cover, cover;
  height: fit-content;
  color: #fafafc;
  padding: 18rem 4rem 12rem;
  .heroInner {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
  }
  .btn{
    display: inline-block;
    text-decoration: none;
    white-space: nowrap;
    padding: 0.75rem 1.5rem;
    font-size: 1.15rem;
    font-weight: 600;
    font-family: Arial;
    color: white;
    // background: #fafafc;
    border-radius: 0.2rem;
    transition: all 0.1s;
    // box-shadow: 0 0.5rem 1.5rem -0.5rem currentColor;
  }
  .btn:hover,
  .btn:focus {
    // box-shadow: 0 0 0 2px #2e2e48, 0 0 0 4px #fafafc;
    color: red
    
  }

  .btn:active {
    transform: scale(0.95);
  }
  span {
    max-width: 50%;
  }
  h1 {
    font-weight: 900;
    color: white;
    // -webkit-text-stroke-width: 0.3px;
    // -webkit-text-stroke-color: black;
    font-size: clamp(3rem, 8vw, 4rem);
    font-family: Manrope;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
`;

export default HeroSection;