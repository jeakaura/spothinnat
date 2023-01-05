import { SpotData } from "../types";

interface HighProps {
    /**
     * Data SpotData[] muodossa
     */
    data: SpotData[];
}

/**
 * Etsii datasta kalleimman hinnan ja kellonajan, ja palauttaa ne taulukossa.
 * 
 * @param props funktion propsit (eli data)
 * @returns Taulukko jossa ensimmäisenä kallein hinta ja toisena kellonaika
 */
function findHighest ( props: HighProps ): [number, string] {
    let prc = 0;
    let time = '';
    for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].price > prc) {
            prc = props.data[i].price;
            time = props.data[i].timestamp;
        }
    }
    return [prc, time]
}

export default findHighest;
