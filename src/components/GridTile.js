
import styled from 'styled-components'

const Wrapper = styled.div`
    background: ${({ $background, theme }) => $background ? $background : theme.colors.lightGray};
`;

const GridTile = ({children, background}) => (
    <Wrapper $background={background}>
        {children}
    </Wrapper>
)

export default GridTile;