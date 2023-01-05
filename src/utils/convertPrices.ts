import { SpotData } from "../types";

/**
 * Muuttaa SpotDatassa olevat hinnat megawattitunneista (eur) kilowattitunneiksi (snt),
 * sekä lisää hintaan sähkön arvolisäveron 10%.
 * 
 * @param props Alkuperäinen SpotData[] propsina
 * @returns Muokattu data EUR/MWh -> snt/kWh
 */
function convertPrices(props: SpotData[]): SpotData[] {
  const converted: SpotData[] = props.map(d => {
    const tmp = {
      timestamp: d.timestamp,
      price: ((d.price / 10) * 1.1),
      deliveryArea: d.deliveryArea,
      unit: 'snt/kWh'
    }
    return tmp
  });
  return converted
}

export default convertPrices;
