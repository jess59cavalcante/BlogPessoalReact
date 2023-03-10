import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css';

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('');
        alert("Usuário deslogado");
        navigate('/login');
    }

    return (
        <>
            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                <img src="https://imgur.com/XpN05SX.png" alt="Banner" style={{ width: "100%", display: "flex", alignItems: "center" }}/>
            </Box>

            <AppBar position="static">
                <Toolbar variant="dense" style={{ backgroundColor: "#C8B728" }}>
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
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
        </>
    );
}

export default Navbar;
