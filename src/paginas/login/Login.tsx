import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return (
        
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box className='caixaformulario' padding={5}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto1' >Para Visualizar o Conteudo,Faça o Login!!</Typography>
                        <TextField id='usuario' className="ab" label='usuário'  variant='outlined'  name='usuario'  margin='normal'  fullWidth  />

                        <TextField id='senha' className="ab" label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Grid >
                    <Box  display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1' component={Link} to="/cadastro">Cadastre-se</Typography>
                    </Box>
                    </Grid>
                </Box>
                
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
        
    );
}

export default Login;
