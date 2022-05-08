import React,{Fragment} from 'react'
import NavBar from '../components/Navigation';
import Footer from '../components/Footer';

function Layout({children}) {
    return (
        <Fragment >
            <NavBar />
            {children}
            <Footer/>
        </Fragment>
    );
}

export default Layout;