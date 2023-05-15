import React, {useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import {Button} from "react-bootstrap";

function PostFileRequest(props) {

    const [content, setContent] = useState(null);
  const postReq = async () => {
    return axios({
      method: 'post',
      url: 'http://anonomous.fr:8083/api/upload',
      headers: {
        Authorization : `Bearer ${Cookies.get("jwt_token")}`
      },
      data: {
        name: props.file.name,
        fileData: content
      }
    });
  }

  let fr = new FileReader();

  const handleFileRead = (e) => {
    setContent(fr.result);
  }

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          fr.onloadend = handleFileRead;
          fr.readAsText(props.file);
          postReq()
            .then((res) => {
                console.log(res.data);
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

export default PostFileRequest;
