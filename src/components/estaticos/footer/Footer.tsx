import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/TokensReducer';
import { useNavigate } from 'react-router-dom';
import { addToken } from '../../../store/token/Actions';

function Footer() {
    
        const token = useSelector<TokenState, TokenState["tokens"]>(
            (state) => state.tokens
        );
        let navigate = useNavigate();
        const dispatch = useDispatch();
    
        function goLogout() {
            dispatch(addToken(''));
            alert("Usuário deslogado");
            navigate("/login");
        }
    
        var footercomponent
        if(token !=""){
            footercomponent =  <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='texto'>Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.facebook.com/evandro.miranda.716" target="_blank">
                            <FacebookIcon className='redes' />
                        </a>
                        <a href="https://www.instagram.com/evandrera13/" target="_blank">
                            <InstagramIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/in/evandro-miranda-92172070/" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </Box>
                </Box>
                <Box className='box2'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='texto' >© 2020 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="Evandro Miranda">
                            <Typography variant="subtitle2" gutterBottom className='texto' align="center">Evandro.G.Miranda</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        }
    return (
        <>
        {footercomponent}
        </>
    )
}

export default Footer;