import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import { Login } from '@mui/icons-material';

function Cadastro() {

    return (
        
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box className='caixaformulario' padding={5}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto1' >Cadastre-se, é Rapidinho!!!!</Typography>
                        <TextField className="ab"label="Nome" id="nome" name="nome" variant='outlined' fullWidth margin='normal' />
                    <TextField className="ab" label="E-mail" id="email" name="email" variant='outlined' fullWidth margin='normal' />
                    <TextField className="ab"label="Foto" id="foto" name="foto" variant='outlined' fullWidth margin='normal' />
                    <TextField className="ab"label="Senha" type="password" id="senha" name="senha" variant='outlined' fullWidth margin='normal' />
                    <TextField className="ab"label="Confirmar Senha" type="password" id="confirmarsenha" name="confirmarsenha" variant='outlined' fullWidth margin='normal' />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Grid >
                    <Box  display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Já é cadastrado?</Typography>
                        </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1' component={Link} to="/login">Faça Login</Typography>
                    </Box>
                    </Grid>
                </Box>
                
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
        
    );
}

export default Cadastro;
