import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core'
import { makeStyles } from '@material-ui//core/styles'
import Typed from 'react-typed'
import headshot from '../../assets/images/Headshot.jpg'
import Button from 'react-bootstrap/Button';
//new components for bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';

const Header = () => {

    return (
            <Ratio className="ratio ratio-16x9" >
                <iframe title="adam-reel" src="https://player.vimeo.com/video/672158658?h=0265db1eec" allowFullScreen></iframe>
            </Ratio>
        // <Box className={classes.typedContainer}>
        //     <Grid container justify='center'>
        //         <Avatar src={headshot} alt='Adam Headshot' className={classes.avatar} />
        //     </Grid>
        //     <Typography variant='h4' className={classes.title}>
        //         Adam West
        //     </Typography>
        //     <div class="container-fluid">
        //         ...
        //     </div>
        //     <br />
        //     <Typography variant='h5 ' className={classes.subtitle}>
        //         <Typed
        //             strings={['Video Production', 'Video Editing', 'Web Design', 'Web Development']}
        //             typeSpeed={40}
        //             backSpeed={60}
        //             loop
        //         />
        //     </Typography>
        //     <Button> this is a bootstrap button</Button>
        // </Box>
    )
}

export default Header
