import React, {useEffect, useState} from 'react';
import {NavLink} from "react-bootstrap";
import axios from "axios";

function LoginButton(props) {
  const [axiosInstance, setInstance] = useState(null);

  return (
    <>
      <NavLink
        to={'/homepage'}
        type="button"
        onClick={() => {
          props.children()
            .then((res) => {//Aller sur la homePage, et stoquer le token
              const instance = axios.create({
                baseURL: 'http://localhost:8080',
                timeout: 1000,
                headers: {'Authorization': 'Bearer '+res.data.token}
              });
              instance('/user/read')
                .then((res) => console.log(res.data))
            })
            .catch((res) => {//Pour le moment afficher "mauvais identifiants"
              console.log(res);
            })
        }}
        >
        Connexion</NavLink>
    </>
  );
}

export default LoginButton;