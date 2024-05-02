import styled from 'styled-components';

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: url(${({ $imageUrl }) => $imageUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    height: ${({ $size }) => $size};
    width: ${({ $size }) => $size};
    outline: 5px solid rgba(0,0,0,.25);

    border-radius: ${({ $size }) => {
        // Assuming $size is a string like "48px"
        const sizeValue = parseInt($size, 10); // Converts "48px" to 48
        return `${sizeValue / 2}px`; // Returns half the size as a string with "px"
    }};
`;

export const Avatar = ({imageUrl, size = '90px'}) => {
    return (
        <Circle $imageUrl={imageUrl} $size={size} />
    )
}

export default Avatar;