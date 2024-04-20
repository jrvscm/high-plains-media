import styled from 'styled-components';

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

    border: ${({ theme, $variant }) => $variant === 'primary' ? `1px solid ${theme.colors.blue}` : `1px solid ${theme.colors.white}`};
    background: ${({ theme, $variant }) => $variant === 'primary' ? `${theme.colors.blue}` : 'transparent'};
    color: #fff;

    &:hover {
        border: ${({ theme, $variant }) => $variant === 'primary' ? `${theme.colors.white}` : `1px solid ${theme.colors.blue}`};
        background: ${({ theme, $variant }) => $variant === 'primary' ? `${theme.colors.white}` : 'transparent'};
        color: ${({ theme, $variant }) => $variant === 'primary' ? `${theme.colors.blue}` : `${theme.colors.blue}`};
        filter: brightness(${({ $variant }) => $variant === 'primary' ? '100%' : '100%'});
        ${({$hoverStyle}) => $hoverStyle}
    };
    
    ${({$style}) => $style}
`;

function Button({variant = 'primary', children, $style=``, $hoverStyle=``, onClick = () => {}}) {
    return <CalloutButton $style={$style} $hoverStyle={$hoverStyle} $variant={variant} onClick={onClick}>{children}</CalloutButton>
}

export default Button;