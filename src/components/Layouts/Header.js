import React, { Component } from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

class Header extends Component {
    render() {
        return (
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="headline" color="inherit">
                            Exercise Database
                        </Typography>
                    </Toolbar>
                </AppBar>
        );
    }
}

export default Header;