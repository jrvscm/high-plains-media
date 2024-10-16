import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { device } from '../../styles/breakpoints';
import useResponsive from '../../components/hooks/useResponsive';
import useSplashScreen from '../../components/hooks/useSplashScreen';

import HeaderPill from '../../components/HeaderPill';
import CustomCursor from '../../components/CustomCursor';

import { getPortfolioProjects, getProjectByTitle } from '../../utils/contentful';

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 100px;
  background: ${({theme}) => theme.colors.backgroundGradient}; 

  @media ${device.tablet} {
    background: ${({theme}) => theme.colors.mobileBackgroundGradient};
  }
`;

const Hero = styled(Container)`
    background: ${({ $image }) =>  $image && `url(${$image}) top center no-repeat`};
    background-size: cover;
    border: 5px solid turquoise;
    border-radius: 25px;
    width: 80%;
    aspect-ratio: 5 / 3; /* Aspect ratio 4:3 for the Hero component */
    margin-top: 80px;
    position: relative;
    --tw-shadow: -31px 31px 41px rgba(0, 0, 0, .39);
  --tw-shadow-colored: -31px 31px 41px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    @media ${device.tablet} {
      border: 2px solid turquoise;
      border-radius: 8px;
      margin-top: 60px;
    }
`;

const Phone = styled.div`
  background: ${({ $image }) =>  $image && `url(${$image}) bottom center no-repeat`};
  background-size: cover;
  aspect-ratio: 8 / 16; /* Aspect ratio 9:16 for the Phone component */
  width: 20%;
  z-index: 1;
  border: 5px solid turquoise;
  border-radius: 25px;
  position: absolute;
  bottom: -10%;
  right: -8%;
  --tw-shadow: -31px 31px 41px rgba(0, 0, 0, .39);
  --tw-shadow-colored: -31px 31px 41px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  @media ${device.tablet} {
    border: 2px solid turquoise;
    border-radius: 8px;
  }
`;

const Technologies = styled(Container)`
    background: ${({ theme }) => theme.colors.primaryLight};
    height: 120px;
    border-radius: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.6); /* Inset shadow for depth effect */
    text-transform: uppercase; 
    width: 70vw;
    z-index:1;
    margin: 100px auto 80px auto;
    border: 5px solid turquoise;

    color: ${({ theme }) => theme.colors.white};
    font-family: 'Orbitron', sans-serif;
    font-size: 36px;

    @media ${device.tablet} {
      border: 2px solid turquoise;
      height: auto;
      padding: 5px 12px;
      margin: 30px auto;
      width: fit-content;
    }
`;

const H3 = styled.h3`
  margin: 0;
  margin-right: 20px;
  padding: 0;
  letter-spacing: 2px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);

  @media ${device.tablet} {
    display: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px; /* Space between icons */
  padding: 0; 
  margin: 0;

  img {
    height: 100%;
    width: 7vw;

    @media ${device.tablet} {
      height: 10vw;
      width: auto;
    }
  }

  /* Add a vertical divider between each image */
  img:not(:first-child) {
    border-left: 2px solid ${({ theme }) => theme.colors.white}; /* Divider color */
    padding-left: 20px; /* Space after divider */

    @media ${device.tablet} {
      border-width: 1px;
    }
  }
`;

const DescriptionWrapper = styled(Container)`
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const AboutTheProjectWrapper = styled(Container)`
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 80px;

  > div {
    border: 5px solid turquoise;
    border-radius: 25px;
    padding: 0px 16px;

    @media ${device.tablet} {
      border-width: 2px;
    }
  }
`;

const AboutTheProjectHeader = styled.h4`
  font-family: 'Orbitron', sans-serif;
  font-size: 32px;
  letter-spacing: 2px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  margin: 20px 16px;

  @media ${device.tablet}{
    margin: 16px 0px;
  }
`;

const AboutTheProjectP = styled.p`
  margin: 20px 16px;
  display: block;
  width: 50%;

  @media ${device.tablet}{
    width: 100%;
    margin: 20px 0px;
  }
`;


const BtnWrapper = styled.div`
  margin-top: ${({ $isMobile }) => $isMobile ? '16px' : '28px'};
  padding-left: 16px;
  padding-bottom: 32px;

  @media ${device.tablet}{
    padding-left: 0px;
    padding-bottom: 16px;
  }

.btn-primary {
  min-width: 25vw;
  background-color: ${({ theme }) => theme.colors.white};
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Orbitron', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 50px;
  transition: all .3s ease;
  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
  }
}`;  


const Project = ({ project }) => {
  const router = useRouter();
  const { SplashComponent } = useSplashScreen('/images/highplains-logo-v2.svg');
  const [hovered, setHovered] = useState(false);
  const { isMobile } = useResponsive();
  
  const handleClick = () => {
    router.push('/contact')
  }
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Julie&apos;s Caring Heart Foundation Tournament | High Plains Media Project</title>
        <meta name="description" content="Discover how High Plains Media created a custom website for Julie's Caring Heart Foundation to streamline player and sponsor signups, handle payments, and provide real-time registration data for their annual golf tournament." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/highplains-logo-v2.svg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.highplainsmedia.com/projects/julieschf" />
      </Head>
      {SplashComponent}
      {!isMobile && <CustomCursor hovered={hovered}/>}
      <Wrapper>
        <Container>
            {project?.fields?.title && <HeaderPill hideLinks title={project?.fields?.title} />}
        </Container>
        {project?.fields?.desktopImage?.fields?.file?.url && 
        <Hero $image={project?.fields?.desktopImage?.fields?.file?.url}>
          {project?.fields?.mobileImage?.fields?.file?.url && 
          <Phone $image={project?.fields?.mobileImage?.fields?.file?.url} />}
        </Hero>}
        <Technologies>
          <H3>BUILT WITH</H3>
          <IconWrapper>
            {project?.fields?.tech.map((tech, index) => 
              <img key={`tech-svg-${index}`} src={`/images/tech-stack-${tech === 'next' ? 'nextjs' : tech}.svg`} alt={`${tech}-logo`} />)
            }
          </IconWrapper>
        </Technologies>
        <DescriptionWrapper>
          <Description>
            {project?.fields?.description}
          </Description>
        </DescriptionWrapper>
        <AboutTheProjectWrapper>
          <div>
          <AboutTheProjectHeader>
            ABOUT THE PROJECT
          </AboutTheProjectHeader>
          <AboutTheProjectP>
            {project?.fields?.outline}<br /><br />
            {project?.fields?.projectHighlights?.map((highlight, index) => 
              <><span key={`project_${index}`}>{index + 1}. {highlight}</span><br /></>
            )}
          </AboutTheProjectP>
          <BtnWrapper $isMobile={isMobile} md={6}>
            <Button onClick={() => handleClick()} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="mt-2 btn-primary" style={{width: isMobile ? '100%' : ''}}>contact</Button>
          </BtnWrapper>
          </div>
        </AboutTheProjectWrapper>
      </Wrapper>
    </>
  );
}

export async function getStaticPaths() {
  const projects = await getPortfolioProjects();
  const paths = projects.map(project => ({ params: { project: project.fields.title } }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const project = await getProjectByTitle(params.title);
  if (!project) {
    return { notFound: true };
  }
  return { props: { project } };
}

export default Project;
