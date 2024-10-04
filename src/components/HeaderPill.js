import React from 'react';
import { styled } from 'styled-components';
import { device } from '../styles/breakpoints';

const Wrapper = styled.div`
    padding-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
        padding-top: 50px;
    }
`;

const PillContainer = styled.div`
    background: ${({ theme }) => theme.colors.primaryLight};
    padding: 15px 30px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.6); /* Inset shadow for depth effect */
    text-transform: uppercase; 
    width: 40vw;

    @media ${device.tablet} {
        width: 90%;
    }
`;

const PillText = styled.span`
    font-family: "Orbitron", sans-serif;
    font-size: 42px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);

    @media ${device.tablet} {
        font-size: 24px;
    }
`;

const HeaderPill = ({title}) => (
    <Wrapper>
        <PillContainer>
            <PillText>{title}</PillText>
        </PillContainer>
    </Wrapper>
);

export default HeaderPill;