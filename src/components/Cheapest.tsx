import { useEffect, useState } from "react";
import { SpotData } from "../types";
import findCheapest from "../utils/findCheapest";

interface CheapProps {
    /**
     * Data SpotData[] muodossa
     */
    data: SpotData[];
}

/**
 * Komponentti, joka näyttää datasta halvimman hinnan ja kellonajan.
 * Jos ja kun propsina saatava data muuttuu yms. niin komponentti renderöityy
 * ja jos dataa on, niin siitä etsitään halvin hinta ja kellonaika ja asetetaan ne tilaan.
 * 
 * @param props komponentin propsit CheapPropseina
 * @returns komponentin sisältö
 */
const Cheapest = ( props: CheapProps ) => {
    const [cheapestPrice, setCheapestPrice] = useState(0);
    const [cheapestTime, setCheapestTime] = useState('HH:MM');

    useEffect(() => {
        if (props.data.length) {
            const priceAndTime = findCheapest(props)
            setCheapestPrice(Number(Number(priceAndTime[0]).toFixed(1)));
            setCheapestTime(priceAndTime[1].split('T')[1].slice(0,5));
        }
    }, [props.data])

    return(
        <div className="card">
            <div className="container">
                <h3>Halvin tunti {cheapestTime}</h3>
                <p>{cheapestPrice} snt/kWh</p>
            </div>
        </div>
    )
};

export default Cheapest;
