import { useState } from 'react';
import { Button, TextField } from "@mui/material";
import useAuth from "../../router/validations/Auth/hook/useAuth";
import { useNavigate } from "react-router-dom";
import './index.css'

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const {handleLogin} = useAuth()
    const navigate = useNavigate()
    function handleLoginInButton(){
        handleLogin("Vitor","batatinha")
        navigate("/")
    }
    return <>
    <form id="login-form"> 
        <img src="https://cdn.discordapp.com/attachments/1072999714322128961/1115442132845600779/geraldopizza_logo_fundo-removebg-preview.png"
             alt="logo" 
             className='logo'/>
        <TextField
            className='login-element custom-textfield'
            sx={{
                margin: '10px',
            }}
            type='text'
            id="usernameId"
            label="Nome do Usuário"
            value={username}
            onChange={(event) => {setUsername(event.target.value)}}    
        /> 
        <TextField
            className='login-element custom-textfield'
            sx={{
                margin: '10px',
            }}            
            type='text'
            id="passwordId"
            label="Senha do Usuário"
            value={password}
            onChange={(event) => {setPassword(event.target.value)}}    
        />        
        <Button color="primary"
        className='login-element' 
        sx={{
            padding:'15px',
            width:'85%',
            marginTop:'100px'
        }}
        variant="contained" 
        onClick={()=> handleLoginInButton()} >Entrar</Button>
        
    </form>
    
    </>
}