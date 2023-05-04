import React, {useState} from 'react';
import PostAuthRequest from "../components/PostAuthRequest";

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>REGISTER</h1>
      <form>
        <label htmlFor="username">Email :</label>
        <input type="email" id="username" name="username"
               onChange={(e) => setEmail(e.currentTarget.value)}/>
	
        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" name="password"
               onChange={(e) => setPassword(e.currentTarget.value)}/>

        <PostAuthRequest type="button"
                         email={email}
                         password={password}
                         endurl={"register"}
                         msg={"Creer compte"}
        ></PostAuthRequest>
      </form>
        <a href="/login">Je possede deja un compte</a>
    </>
  );
}

export default Register;
