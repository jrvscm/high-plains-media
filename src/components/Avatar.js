import styled from 'styled-components';

// Function to get initials from a name
const getInitials = (name) => {
  if (!name) return '';
  const nameParts = name.split(' ');
  const initials = nameParts.map(part => part[0]).join('');
  return initials.toUpperCase();
};

// Function to get a random background color
const getRandomColor = () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ $imageUrl }) => $imageUrl ? `url(${$imageUrl})` : getRandomColor()};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: ${({ $size }) => $size};
  width: ${({ $size }) => $size};
  outline: 5px solid rgba(0,0,0,.25);

  border-radius: ${({ $size }) => {
    const sizeValue = parseInt($size, 10); 
    return `${sizeValue / 2}px`; 
  }};
  color: white;
  font-size: ${({ $size }) => `${parseInt($size, 10) / 2.5}px`}; // Adjust font size based on circle size
`;

export const Avatar = ({ imageUrl, size = '90px', name }) => {
  const initials = getInitials(name);

  return (
    <Circle $imageUrl={imageUrl} $size={size} $name={name}>
      {!imageUrl && initials}
    </Circle>
  );
};

export default Avatar;
