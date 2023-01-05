import { useEffect, useState } from "react";
import { SpotData } from "../types";
import findHighest from "../utils/findHighest";

interface HighProps {
    /**
     * Data SpotData[] muodossa
     */
    data: SpotData[];
}

/**
 * Komponentti, joka näyttää datasta kalleimman hinnan ja kellonajan.
 * Jos ja kun propsina saatava data muuttuu yms. niin komponentti renderöityy
 * ja jos dataa on, niin siitä etsitään halvin hinta ja kellonaika ja asetetaan ne tilaan.
 * 
 * @param props komponentin propsit HighPropseina
 * @returns komponentin sisältö
 */
const Highest = ( props: HighProps ) => {
    const [highestPrice, setHighestPrice] = useState(0);
    const [highestTime, setHighestTime] = useState('HH:MM');

    useEffect(() => {
        if (props.data.length) {
            const priceAndTime = findHighest(props)
            setHighestPrice(Number(priceAndTime[0].toFixed(1)));
            setHighestTime(priceAndTime[1].split('T')[1].slice(0,5));
        }
    }, [props.data])

    return(
        <div className="card">
            <div className="container">
                <h3>Kallein tunti {highestTime}</h3>
                <p>{highestPrice} snt/kwh</p>
            </div>
        </div>
    )
};

export default Highest;
