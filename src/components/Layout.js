import Navigation from './Navigation';
import { useLoading } from './contexts/LoadingContext';
import Loader from '../components/Loader';

export const Layout = ({ children }) => {
    const { isLoading } = useLoading();

    return (
        <>
            <Navigation />
            {children}
            {isLoading && <Loader />}
        </>
    )
}

export default Layout;