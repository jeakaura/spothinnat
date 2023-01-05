import { useEffect, useState } from 'react';
import './App.css';
import Chart from './components/Chart';
import Header from './components/Header';
import StatBoxes from './components/StatBoxes';
import { SpotData } from './types';
import convertPrices from './utils/convertPrices'

/**
 * SpotHinta App-komponentti.
 * Renderöidessä effect-hookki hakee datan fetchilla ja asettaa sen tilaan.
 * Datan tulee olla types-tiedostossa määritellyssä SpotData-muodossa.
 * 
 * @returns palauttaa sovelluksen komponentit
 */
function App() {
  const [data, setData] = useState<SpotData[]>([]);
  const appName = 'Spothinta ohjelmointitehtävä';
  const logo = 'Akamon';
  const url = 'http://localhost:3001/spot';

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => {
      setData(convertPrices(res))
    })
    .catch(err => console.log('fetching failed: ', err))
  }, [])

  return (
    <div>
      <Header logo={logo} headerTxt={appName} />
      <StatBoxes data={data} />
      <Chart data={data} />
    </div>
  );
}

export default App;
