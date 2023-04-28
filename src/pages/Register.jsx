import React, {useState} from 'react';
import LoginButton from "../components/LoginButton";
import axios from 'axios';

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postReq = async () => {
    return (await axios({
      method: 'post',
      url: 'http://anonomous.fr:8083/api/auth/register',
      data : {
        email: email,
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
               onChange={(e) => setEmail(e.currentTarget.value)}/>

        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" name="password"
               onChange={(e) => setPassword(e.currentTarget.value)}/>

        <LoginButton type="button">{postReq}</LoginButton>
      </form>
    </>
  );
}

export default Register;
