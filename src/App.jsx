import { useEffect, useState } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_ENDPOINT_RANDOM_IMG = `https://cataas.com/cat/says/${firstWord}`;

export function App() {
  const [fact, setFact] = useState('lorem ipsum cat fact');

  useEffect(() => {
    fetch('CAT_ENDPOINT_RANDOM_FACT')
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <div>
      <h1>App de gatos</h1>
      <p>{fact}</p>
    </div>
  );
}
