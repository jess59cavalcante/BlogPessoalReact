import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/TokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/token/Actions';
import {Box} from '@mui/material';

function Navbar() {
    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        alert("Usuário deslogado")
        navigate('/login')
    }

    var navbarComponent;

    if(token != ""){
    }
    
        navbarComponent =  
        <AppBar position="static">
        <Toolbar variant="dense" style={{ backgroundColor: "#C8B728" }}>
            <Box className='cursor'>
                <Typography variant="h5" color="inherit">
                    Jessica Cavalcante
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                        Inicio
                        </Typography>
                    </Box>
                </Link>
                <Link to="/postagem" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to="/listatema" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Depoimentos
                        </Typography>
                    </Box>
                </Link>
                <Link to="/login" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Entrar
                        </Typography>
                    </Box>
                </Link>
                <Link to="/login" className="text-decorator-none">
                <Box mx={1} className='cursor'  onClick={goLogout}>
                    <Typography variant="h6" color="inherit">
                        Sair
                    </Typography>
                </Box>
                </Link>
            </Box>
        </Toolbar>
    </AppBar>

    
    return (
        <>
    {navbarComponent}
        </>
    )
    
    }

export default Navbar;