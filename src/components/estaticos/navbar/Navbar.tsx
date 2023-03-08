import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Avatar, Box} from '@mui/material';
import { Link } from 'react-router-dom';
function Navbar() {

    return (
        <>
        <Box paddingTop={1} display="flex" alignItems="center"  justifyContent="center">
        <img src="https://imgur.com/XpN05SX.png" alt="Banner" style={{ width: "100%", display: "flex", alignItems: "center" }}/>
        </Box>
            <AppBar position="static" style={{ backgroundColor: "#C8B728" }}>
                <Toolbar variant="dense">
                
                    <Box style={{ cursor: "pointer" }} >
                    
                        <Typography variant="h5" color="inherit">
                            Jessica Cavalcante
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Inicio
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Sobre
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Galeria 
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit"component={Link} to="/login">
                                Login
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
