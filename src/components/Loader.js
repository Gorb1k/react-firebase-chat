import React from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={'center'}
                  justify={'center'}
            >
                <Grid container
                      alignItems={'center'}
                      justify={'center'}
                >
                    <div className="lds-hourglass"/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;