import React from "react";
import styled from "styled-components";
import img from './HeroPhoto.JPG';

const HeroSection = styled.section`
  background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),url(${img});
  background-position: center, top left;
  background-size: cover, cover;
  height: fit-content;
  color: #fafafc;
  padding: 16rem 4rem 8rem;
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
    color: #2e2e48;
    background: #fafafc;
    border-radius: 0.2rem;
    transition: all 0.1s;
    box-shadow: 0 0.5rem 1.5rem -0.5rem currentColor;
  }
  .btn:hover,
  .btn:focus {
    box-shadow: 0 0 0 2px #2e2e48, 0 0 0 4px #fafafc;
  }

  .btn:active {
    transform: scale(0.95);
  }
  span {
    max-width: 50%;
  }
  h1 {
    font-weight: 900;
    color: #2e2e48;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: white;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    font-family: Arial;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 576px) {
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(https://images.pexels.com/photos/133325/pexels-photo-133325.jpeg?auto=compress&cs=tinysrgb&w=800&h=750&dpr=1);
    background-position: center, bottom left;
    background-size: cover, cover;
    align-items: flex-start;
    padding-top: 7.5rem;
    height: 75vh;
    max-height: 720px;
  }
`;

export default HeroSection;