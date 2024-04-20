// components/ParallaxSection.js
import React from 'react';
import styled from 'styled-components';

// Styled component for the parallax container
const ParallaxContainerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

// Styled component for the parallax background image
const ParallaxBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({$imageUrl}) => $imageUrl});
  background-size: cover;
  background-position: center;
  z-index: -1; /* Ensure the background image stays behind other content */
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1; /* Ensure content appears above the background image */
  height: 100%; /* Ensure content fills the container */
  overflow-y: auto; /* Allow content to scroll if it exceeds container height */
`;

const ParallaxSection = ({ $imageUrl, children }) => {
  return (
    <ParallaxContainerWrapper>
      <ParallaxBackground $imageUrl={$imageUrl} />
      <ContentContainer>
        {children}
      </ContentContainer>
    </ParallaxContainerWrapper>
  );
};

export default ParallaxSection;
