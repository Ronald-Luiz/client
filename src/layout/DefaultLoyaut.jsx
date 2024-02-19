//components
import Header from '../components/Header';
import CustomComponent from '../components/CustomComponent';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <CustomComponent />
            <Outlet />
            <Footer />

        </>
    )
}