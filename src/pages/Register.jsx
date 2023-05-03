import React, {useState} from 'react';
import PostRequest from "../components/PostRequest";

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

        <PostRequest  type="button"
                      email={email}
                      password={password}
                      msg={"Creer compte"}
        ></PostRequest>
      </form>
    </>
  );
}

export default Register;
