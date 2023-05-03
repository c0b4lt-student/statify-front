import React, {useEffect, useState} from 'react';
import PostAuthRequest from "../components/PostAuthRequest";
import Cookies from "js-cookie";
import {Navigate} from "react-router-dom";


//I want to check non stop if Cookies.get('jwtToken') exists and redirect user to /homepage
function LogIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isConnected, setIsConnected] = useState("");

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken) {
      setIsConnected(<Navigate to={'/homepage'} />);
    }
  }, [Cookies.get('jwt_token')]);

    return (
      <>
        { isConnected }
        <h1>LOGIN</h1>
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
                           endurl={"authenticate"}
                           msg={"Connexion"}
          />
        </form>

        <a href="/register">Je n'ai pas de compte</a>
      </>
    );
}

export default LogIn;
