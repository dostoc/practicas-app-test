import { useEffect, useState } from 'react';

export default function app() {
  const [data, setData] = useState('lorem ipsum cat fact');

  // traer datos de la API
  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then(setData(data.response));
  }, []);

  return <h1>{data}</h1>;
}
