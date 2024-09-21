import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import { device } from '../styles/breakpoints';

const PillWrapper = styled.div`
    text-align: center;
`;

const Pill = styled.h2`
    ${({ theme }) => theme.fonts.font13Bold};
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    margin: 0;
    background: ${({ theme }) => theme.colors.accentBlue};
    color: ${({theme}) => theme.colors.primary};
    display: inline-block;
    text-transform: uppercase;
    border-radius: 50px;
`;

const Span = styled.span`
    color: ${({ theme }) => theme.colors.primary};
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

const P = styled.p`
    ${({ theme }) => theme.fonts.font16TextSemiBold};
    margin: ${({ theme }) => `${theme.spacing.smd} auto 0 auto`};
    width: 50%;
    display: block;

    @media ${device.laptop} {
        width: 100%;
    }
`;

export const TitleWithPill = ({title, headline, spanText, subhead}) => {
    return (
        <TitleCol>
            <PillWrapper>
                <Pill>{title}</Pill>
                <H3>{headline}<Span>{spanText}</Span></H3>
                <P>{subhead}</P>
            </PillWrapper>
        </TitleCol>
    )
}

export default TitleWithPill