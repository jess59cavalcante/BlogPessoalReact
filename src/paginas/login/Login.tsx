import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from 'react-use-localstorage';
import UsuarioLogin from '../models/UserLogin';
import { login } from '../services/Services';
import './Login.css';


function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
    token:''
  })
  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    if(token !== '') {
      navigate('/home')
    }
  }, [token])
  
  
      
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    try{
      await login('/usuarios/logar', userLogin, setToken)
      alert('Usuário logado com sucesso')
    } catch(error) {
      alert('Usuário e/ou senha inválidos')
    }
  }
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box className='caixaformulario' padding={5}>
                <form onSubmit={onSubmit}>

                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto1' >Para Acessar o Conteúdo, Faça o Login!!</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} className="ab" label="E-mail" id="email" name="usuario" variant='outlined' fullWidth margin='normal' />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} className="ab"label="Senha" type="password" id="senha" name="senha" variant='outlined' fullWidth margin='normal' />

                                            <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Login
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Grid >
                    <Box  display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem Cadastro?</Typography>
                        </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1' component={Link} to="/cadastro">Cadastre Aqui</Typography>
                    </Box>
                    </Grid>
                </Box>
                
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
  )
}

export default Login;