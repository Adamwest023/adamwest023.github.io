import React from 'react';
import SiteNavbar from '../../components/Navbar';
// import Footer from '../../components/Footer'
import Header from '../../components/Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
})
const Home = () => {
    const classes = useStyles()
    return (
        <>

            <SiteNavbar />
            <Header />

        </>
    )
}

export default Home
