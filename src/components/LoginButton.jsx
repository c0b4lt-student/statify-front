import {NavLink} from "react-bootstrap";
import axios from "axios";

function LoginButton(props) {

  return (
    <>
      <NavLink
        to={'/homepage'}
        type="button"
        onClick={() => {
          props.children()
            .then((res) => {//Aller sur la homePage, et stoquer le token
              const instance = axios.create({
                baseURL: 'http://localhost:8083/api/',
                timeout: 1000,
                headers: {'Authorization': 'Bearer '+res.data.jwtToken}
              });
              instance('album')
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