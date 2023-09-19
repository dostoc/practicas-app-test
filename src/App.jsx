import { useEffect, useState } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_ENDPOINT_RANDOM_IMG = `https://cataas.com/cat/says/${firstWord}`;

export default function app() {
  const [data, setData] = useState('lorem ipsum cat fact');

  // traer datos de la API
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => setData(res.data));
  }, []);

  return (
    <div>
      <h1>App de gatos</h1>
      <h1>{data}</h1>
    </div>
  );
}
