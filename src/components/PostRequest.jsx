import React from "react";
import axios from "axios";
import {Button} from "react-bootstrap";

function PostRequest(props) {
    const postReq = async () => {
        return axios(await({
            method: 'post',
            url: 'http://anonomous.fr:8083/api/auth/register',
            data: {
                email: props.email,
                password: props.password
            }
        }));
    }

  return (
    <>
      <Button
        type="button"
        onClick={() => {
            console.log(props)
            postReq()
                .then((res) => {
                    console.log(res);
                })
                .catch((res) => {
                    console.log(res);
                })
        }}
        >
          test</Button>
    </>
  );
}

export default PostRequest;
