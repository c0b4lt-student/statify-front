import React, {useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import {Button} from "react-bootstrap";

function PostFileRequest(props) {

    const [content, setContent] = useState(null);
  const postReq = async () => {
    return axios({
      method: 'post',
      url: 'http://anonomous.fr:8083/api/upload/',
      data: {
        filename: props.file.name,
        data: content
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

            })
        }}
      >
        {props.msg}
      </Button>
    </>
  );
}

export default PostFileRequest;
