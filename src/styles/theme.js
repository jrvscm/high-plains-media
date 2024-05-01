import { colors } from '../styles/colors';
import { css } from 'styled-components';

const fonts = {
    font14Regular: css`
        font-family: Poppins, sans-seriff;
        font-size: 14px;
        font-weight: normal;
        color: ${colors.black};
    `,

    font16Regular: css`
        font-family: Poppins, sans-seriff;
        font-size: 16px;
        font-weight: normal;
        color: ${colors.black};
    `,

    font16Bold: css`
        font-family: Poppins, sans-seriff;
        font-size: 16px;
        font-weight: 600;
        color: ${colors.black};
    `,

    font18Bold: css`
        font-family: Poppins, sans-seriff;
        font-size: 18px;
        font-weight: 700;
        color: ${colors.black};
    `,

    font30Bold: css`
        font-family: Poppins, sans-seriff;
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 0.8px;
        color: ${colors.black};
    `,

    font48ExtraBold: css`
        font-family: Poppins, sans-seriff;
        font-size: 48px;
        font-weight: 700;
        letter-spacing: 0.8px;
        color: ${colors.black};
    `,

    fontNavLink: css`
        font-family: "Open Sans", sans-seriff;
        font-size: 16px;
        font-weight: 600;
        color: ${colors.black};
    `,

    fontBody24Regular: css`
        font-size: 24px;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
        color: ${colors.gray};
    `,

    font32RobotoBold: css`
        font-size: 32px;
        font-weight: 700;
        font-family: "Roboto", sans-serif;
        color: ${colors.textGray};
    `,

    font30RobotoSemiBold: css`
        font-size: 32px;
        font-weight: 700;
        font-family: "Roboto", sans-serif;
        color: ${colors.textGray};
    `,

    font26RobotoSemiBold: css`
        font-size: 26px;
        font-weight: 600;
        font-family: "Roboto", sans-serif;
        color: ${colors.textGray};
    `,

    font18RobotoSemiBold: css`
        font-size: 18px;
        font-weight: 500;
        font-family: "Roboto", sans-serif;
        color: ${colors.textGray};
    `,

    fontBody18Bold: css`
        font-family: "Roboto", sans-seriff;
        font-size: 18px;
        font-weight: 700;
        color: ${colors.black};
    `,

    font15TextRegular: css`
        font-family: "Open Sans", sans-seriff;
        font-size: 15px;
        font-weight: 400;
        color: ${colors.black};
    `,

    font16TextRegular: css`
        font-family: "Open Sans", sans-seriff;
        font-size: 16px;
        font-weight: 400;
        color: ${colors.textGray};
    `,


    font13Bold: css`
        font-family: "Roboto", sans-seriff;
        font-size: 13px;
        font-weight: 700;
        color: ${colors.black};
    `,

    font16TextSemiBold: css`
        font-family: "Open Sans", sans-seriff;
        font-size: 16px;
        font-weight: 600;
        color: ${colors.textGray};
    `,

    font16RegularItalic: css`
        font-family: "Open Sans", sans-seriff;
        font-size: 16px;
        font-weight: 400;
        font-style: italic;
        color: ${colors.textGray};
    `
}

const spacing = {
    xxs: '4px',
    xs: '6px',
    sm: '8px',
    smd: '16px',
    md: '18px',
    lg: '30px',
    xlg: '36px',
    xxlg: '50px',
    xxxlg: '60px'
}

const tokens = {
    cardBoxShadow: css`rgba(68, 88, 144, 0.12) 0px 0px 29px 0px`,
    fadeInUpAnimation: css`
        @keyframes fadeInUp {
            from {
            opacity: 0;
            transform: translateY(30px);
            }
            to {
            opacity: 1;
            transform: translateY(0);
            }
        }

        animation: fadeInUp 1s ease-out forwards;
    `
}

export const theme = {
    fonts,
    colors, 
    spacing, 
    tokens
}