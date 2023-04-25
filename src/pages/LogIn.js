import React, {useEffect, useState} from 'react';
import LoginButton from "../components/LoginButton";
import axios from 'axios';

function LogIn(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  const postReq = async () => {
    return (await axios({
      method: 'post',
      url: 'http://localhost:8080/login',
      data : {
        username: username,
        password: password
      }
    }));
  };

  return (
    <>
      <h1>Page de connexion</h1>
      <form>
        <label htmlFor="username">Nom d'utilisateur :</label>
        <input type="email" id="username" name="username"
               onChange={(e) => setUsername(e.currentTarget.value)}/>

        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" name="password"
        onChange={(e) => setPassword(e.currentTarget.value)}/>

        <LoginButton type="button">{postReq}</LoginButton>
      </form>
    </>
  );
}

export default LogIn;