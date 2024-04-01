import { CirclesWithBar } from 'react-loader-spinner';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255,255,255,.85)
`;

function Loader() {
    return (
        <Wrapper>
            <CirclesWithBar
                height="100"
                width="100"
                color="rgb(96, 111, 8)"
                outerCircleColor="rgb(96, 111, 8)"
                innerCircleColor="rgb(96, 111, 8)"
                barColor="rgb(96, 111, 8)"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </Wrapper>
    )
}

export default Loader;