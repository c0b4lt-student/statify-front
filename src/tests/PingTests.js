import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function PingTests(props) {
  const [ping, setPing] = useState('');

  useEffect(() => {
    getPing();
  }, []);

  const getPing = async () => {
    const response = await axios.get('/ping');
    setPing(response.data);
    console.log(ping);
  };

  return (
    <>
      <h1>Statify test</h1>
      <Button onClick={ getPing }>PING</Button>
      <h3>{ ping }</h3>
    </>
  );
}

export default PingTests;