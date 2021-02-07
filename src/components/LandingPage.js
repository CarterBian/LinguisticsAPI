import React, { Component } from 'react'
import styled from 'styled-components'
import landingpage from '../images/spotlight.png'
import './LandingPage.css';


const LandingPageContainer = styled.div`
   height:100vh;
   background-color : black;
   display: flex;
   justify-content: center;
`

const BackgroundContainer = styled.div`
   height:100vh;
   width: 100vw;
   background-image: url(${landingpage});
   background-position: center;
   background-size: cover;
   object-fit: cover;
`

const TextContainer = styled.div`
   font-family : "courier","sans-serif";
   font-size : 21px;
   text-align: center;
   align-self:center;
   color: white;
   padding-bottom: 0.7em;
   border-bottom: solid white 2px;
   position: absolute;
   top: 40%;
   left: 50%;
   transform: translate(-50%, -40%);
`

export default function LandingPage(props) {
   return (
      <LandingPageContainer>
         <BackgroundContainer className="fade-in"/>
         <TextContainer>{props.title}</TextContainer>
      </LandingPageContainer>
   )
}