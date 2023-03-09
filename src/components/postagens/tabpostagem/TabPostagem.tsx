import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered className='barra' onChange={handleChange}>
            <Tab style={{ color: 'black' }} label=" Minhas Experiências " value="1"/>
            <Tab style={{ color: 'black' }} label="Conte a Sua História" value="2" />
          </Tabs>
        </AppBar>
        
      </TabContext>
    </>
  );
}
export default TabPostagem;