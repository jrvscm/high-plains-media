import Navigation from './Navigation';
import Footer from './Footer';
import { useLoading } from './contexts/LoadingContext';
import styled from 'styled-components';
import Loader from '../components/Loader';

const Wrapper = styled.div`
    padding-top: 125px;
`;

export const Layout = ({ children }) => {
    const { isLoading } = useLoading();
    return (
        <Wrapper>
            <Navigation />
            {children}
            <Footer />
            {isLoading && <Loader />}
        </Wrapper>
    )
}

export default Layout;