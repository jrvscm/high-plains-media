import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProcessSteps from '../components/ProcessSteps';
import { device } from '../styles/breakpoints';
import useResponsive from '../components/hooks/useResponsive';

const Section = styled.section`
    background: ${({ theme }) => theme.colors.sectionBackground};
    padding: ${({ theme }) => theme.spacing.xxxlg};

    @media ${device.tablet} {
        padding: ${({ theme }) => `${theme.spacing.smd} ${theme.spacing.xs}`};
    }
`;

const StyledContainer = styled(Container)`
`;

const PillWrapper = styled.div`
    text-align: center;
`;

const Pill = styled.h2`
    ${({ theme }) => theme.fonts.font13Bold};
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    margin: 0;
    background: ${({ theme }) => theme.colors.accentBlue};
    color: ${({theme}) => theme.colors.blue};
    display: inline-block;
    text-transform: uppercase;
    border-radius: 50px;
`;

const Span = styled.span`
    color: ${({ theme }) => theme.colors.blue};
`;

const TitleCol = styled(Col)`
    padding-bottom: ${({theme}) => theme.spacing.lg};
`;

const H3 = styled.h3`
    ${({ theme }) => theme.fonts.font32RobotoBold};
    text-transform: capitalize;
    margin-top: ${({ theme }) => theme.spacing.smd};

    @media ${device.tablet} {
        ${({ theme }) => theme.fonts.font26RobotoSemiBold};
    }
`;

const H3Title = styled.h3`
    ${({ theme }) => theme.fonts.font26RobotoSemiBold};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const P = styled.p`
    ${({ theme }) => theme.fonts.font16TextSemiBold};
    margin: ${({ theme }) => `${theme.spacing.smd} auto 0 auto`};
    width: 50%;
    display: block;

    @media ${device.laptop} {
        width: 100%;
    }
`;

const Italic = styled.p`
    ${({ theme }) => theme.fonts.font16RegularItalic};
    margin-bottom: ${({ theme }) => theme.spacing.smd};
`;

const IMG = styled.img`
    width: 100%;
    margin: ${({ theme }) => `0 auto ${theme.spacing.lg} 0`};
    display: block;
`;

const P2 = styled.p`
    ${({theme}) => theme.fonts.font16TextRegular};
`;

export const ImageLeftContentRight = ({title, headline, subhead, spanText}) => {
    const { isMobile } = useResponsive();
    const imagePath = isMobile ? "/images/office-workers.jpg" : "/images/long-image-with-coder.jpg"
    return (
        <Section>
            <StyledContainer>
                <Row className="justify-content-center align-items-center">
                    <TitleCol>
                        <PillWrapper>
                            <Pill>{title}</Pill>
                            <H3>{headline}<Span>{spanText}</Span></H3>
                            <P>{subhead}</P>
                        </PillWrapper>
                    </TitleCol>
                </Row>
                <Row className="justify-content-evenly">
                    <Col className="col-lg-5 col-12">
                        <IMG src={imagePath} alt="tech office worker coding"/>
                    </Col>
                    <Col className="col-lg-6 col-12 justify-content-center">
                        <H3Title>The project begins with a discovery call, where you'll discuss your vision and requirements directly with our leading engineers and designers.</H3Title>
                        <Italic>This initial conversation is crucial as it helps us understand your goals, explore your needs, and align our strategies to ensure that we deliver tailored solutions that exceed your expectations.</Italic>
                        <ProcessSteps />
                        <P2>Throughout each phase of the project, you'll enjoy continuous communication with our team. We provide instant access to our dedicated communication channels, ensuring you're kept in the loop at every step. This commitment to open dialogue, allows for real-time updates and feedback. Our exceptional communication practices ensure that you are always informed and confident in the progress of your project.</P2>
                    </Col>
                </Row>
            </StyledContainer>
        </Section>
    )
}

export default ImageLeftContentRight;