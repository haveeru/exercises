import React from 'react';
import {Grid} from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPnae from './RightPane';


const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10, marginLeft: 10 }
}

const Excercises = () => {
    return (
        <Grid container>
            <Grid item sm>
                <LeftPane styles={styles}/>
            </Grid>
            <Grid item sm>
                <RightPnae styles={styles}/>
            </Grid>    
        </Grid>
    );
};

export default Excercises;