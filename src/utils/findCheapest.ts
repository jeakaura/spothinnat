import { SpotData } from "../types";

interface CheapProps {
    /**
     * Data SpotData[] muodossa
     */
    data: SpotData[];
}

/**
 * Etsii datasta halvimman hinnan ja kellonajan, ja palauttaa ne mukavassa taulukossa.
 * 
 * @param props funktion propsit (eli data)
 * @returns Taulukko jossa ensimmäisenä halvin hinta ja toisena kellonaika
 */
function findCheapest( props: CheapProps ): [number, string] {
    let prc: number = props.data[0].price;
    let time = props.data[0].timestamp;
    for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].price < prc) {
            prc = props.data[i].price;
            time = props.data[i].timestamp;
        }
    }
    return [prc, time]
}

export default findCheapest;
