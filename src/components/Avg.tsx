import { useEffect, useState } from "react";
import { SpotData } from "../types";
import calculateAverage from "../utils/calculateAverage";

interface AvgProps {
    /**
     * Data SpotData[] muodossa
     */
    data: SpotData[];
}

/**
 * Komponentti, joka näyttää datasta saatujen hintojen keskiarvon.
 * Jos ja kun propsina saatava data muuttuu yms. niin komponentti renderöityy
 * ja jos dataa on, niin sen hinnoista lasketaan keskiarvo ja asetetaan ne tilaan.
 * 
 * @param props komponentin propsit AvgPropseina
 * @returns komponentin sisältö
 */
const Avg = ( props: AvgProps ) => {
    const [avgPrice, setAvgPrice] = useState(0);

    useEffect(() => {
        if (props.data.length) {
            setAvgPrice(calculateAverage(props));
        }
    }, [props.data])

    return(
        <div className="card">
            <div className="container">
                <h3>Keskiarvohinta</h3>
                <p>{avgPrice} snt/kwh</p>
            </div>
        </div>
    )
};

export default Avg;
