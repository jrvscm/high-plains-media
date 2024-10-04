import Navigation from './Navigation';
import FooterV2 from './FooterV2';
import { useLoading } from './contexts/LoadingContext';
import styled from 'styled-components';
import Loader from '../components/Loader';

const Wrapper = styled.div`
`;

export const Layout = ({ children }) => {
    const { isLoading } = useLoading();
    return (
        <Wrapper>
            {/* <Navigation /> */}
            {children}
            <FooterV2 />
            {isLoading && <Loader />}
        </Wrapper>
    )
}

export default Layout;