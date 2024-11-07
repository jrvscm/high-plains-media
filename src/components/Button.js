import styled, { css } from 'styled-components';

export const primaryButtonStyle = css`
  margin: ${({theme}) => `${theme.spacing.lg} 0px ${theme.spacing.smd} 0px`};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const primaryHoverStyle = css`
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  background: transparent;
  filter: blur(1px); 
`;

export const secondaryButtonStyle = css`
  margin: ${({theme}) => `${theme.spacing.lg} 0px ${theme.spacing.smd} ${theme.spacing.smd}`};
  border: ${({theme}) => `1px solid ${theme.colors.primary}`};
  color: ${({theme}) => theme.colors.primary};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const secondaryHoverStyle = css`
  filter: blur(1px); 
`;

const CalloutButton = styled.button.attrs({className: 'roboto-regular'})`
    cursor: pointer;
    height: 58px;
    min-width: 220px;
    width: auto;
    padding: 10px;
    margin: 10px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    font-size: 20px;
    letter-spacing: 1px;

    transition: all .25s ease;

    border: ${({ theme, $variant }) => $variant === 'primary' ? `1px solid ${theme.colors.primary}` : `1px solid ${theme.colors.white}`};
    background: ${({ theme, $variant }) => $variant === 'primary' ? `${theme.colors.primary}` : 'transparent'};
    color: #fff;

    &:hover {
        border: ${({ theme, $variant }) => $variant === 'primary' ? `${theme.colors.white}` : `1px solid ${theme.colors.primary}`};
        background: ${({ theme, $variant }) => $variant === 'primary' ? `${theme.colors.white}` : 'transparent'};
        color: ${({ theme, $variant }) => $variant === 'primary' ? `${theme.colors.primary}` : `${theme.colors.primary}`};
        filter: brightness(${({ $variant }) => $variant === 'primary' ? '100%' : '100%'});
        ${({$hoverStyle}) => $hoverStyle}
    };
    
    ${({$style}) => $style}
`;

function Button({variant = 'primary', children, $style=``, $hoverStyle=``, onClick = () => {}}) {
    return <CalloutButton $style={$style} $hoverStyle={$hoverStyle} $variant={variant} onClick={onClick}>{children}</CalloutButton>
}

export default Button;