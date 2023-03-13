import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import './Home.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import { TokenState } from '../../store/token/TokensReducer';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])
  return (
    <>
      <h1 style={{ color: "yellow", textAlign: "center" }}>
      "Preparando-se para o seu bootcamp: informações importantes".
      </h1>

      <Grid container spacing={0} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <div className="home-video">
            <iframe src="https://www.youtube.com/embed/h3UNHwCYePg" title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
        <h3 style={{ color: "yellow", textAlign: "center" }}>
        Aqui você irá tirar todas as dúvidas dos bastidores, venha comigo nessa experiência incrível e desafiadora!
      </h3>  
          <h4 className="home-text">Se você está lendo isso agora, é porque está buscando informações sobre
        como funciona um bootcamp, e talvez esteja sentindo uma grande ansiedade. Mas fique tranquilo, pois 
        eu entendo perfeitamente como você se sente! Meu objetivo é ajudá-lo a se sentir mais seguro e 
        confiante, fornecendo todas as informações necessárias para que você comece seu bootcamp com 
        tranquilidade e a certeza de que tudo dará certo.</h4>
        <TabPostagem/>
        </Grid>
      </Grid>
    </>
  )
}

export default Home;
