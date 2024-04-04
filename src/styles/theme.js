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

    font30Bold: css`
        font-family: Poppins, sans-seriff;
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 0.8px;
        color: ${colors.black};
    `,

    fontNavLink: css`
        font-family: "Open Sans", sans-seriff;
        font-size: 16px;
        font-weight: 600;
        color: ${colors.black};
    `
}

export const theme = {
    fonts,
    colors
}