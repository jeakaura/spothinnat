import { SpotData } from "../types";
import Avg from "./Avg";
import Cheapest from "./Cheapest";
import Highest from "./Highest";

interface SBProps {
    /**
     * Data SpotData[] muodossa
     */
    data: SpotData[];
}

/**
 * Komponentti, joka luo sivulla näkyvät tilastolaatikot.
 * 
 * @param props komponentin propsit SBPropsina
 * @returns komponentin sisältö
 */
const StatBoxes = ( props: SBProps ) => {
    return(
        <div className="flexbox">
            <Cheapest data={props.data} />
            <Highest data={props.data} />
            <Avg data={props.data} />
        </div>
    )
};

export default StatBoxes;
