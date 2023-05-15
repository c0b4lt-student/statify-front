import React from "react";
import Cookies from "js-cookie";
import axios from "axios";
import {Button} from "react-bootstrap";

function PostAuthRequest(props) {
    const postReq = async () => {
        return axios({
            method: 'post',
            url: 'http://localhost:8080/api/auth/' + props.endurl,
            data: {
                email: props.email,
                password: props.password
            }
        });
    }

  return (
    <>
      <Button
        type="button"
        onClick={() => {
            postReq()
                .then((res) => {
                    Cookies.set('jwt_token', res.data.jwtToken/*, { httpOnly: true, secure: true}*/);
                  axios.defaults.headers.post['Authorization'] = `Bearer ${res.data.jwtToken}`;
                  window.location.reload();
                })
                .catch((res) => {
                    console.log(res);
                })
        }}
        >
          {props.msg}
      </Button>
    </>
  );
}

export default PostAuthRequest;
