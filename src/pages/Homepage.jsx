import React, {useEffect, useState} from 'react';
import PostFileRequest from "../components/PostFileRequest";

function Homepage(props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [file, setFile] = useState(null);

  return (
    <>
      <form>
        <label htmlFor={"file"}>Inserez votre fichier</label>
        <input type={"file"} accept={"application/json"} id={"file"} name={"file"}
        onChange={(e) => setFile(e.currentTarget.files[0])}/>
        <PostFileRequest type="button"
                         file={file}
                         msg={"send file"}
        ></PostFileRequest>
      </form>
    </>
  );
}

export default Homepage;
