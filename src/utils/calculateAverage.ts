import { SpotData } from "../types";

interface AvgProps {
    /**
     * Data SpotData[] muodossa
     */
    data: SpotData[];
}

/**
 * Laskee datan hinnoista keskiarvon.
 * 
 * @param props funktion propsit (eli data)
 * @returns keskiarvo
 */
function calculateAverage( props: AvgProps ): number {
    const prices: number[] = props.data.map(p => p.price);
    const sum: number = prices.reduce((a, b) => a + b, 0);
    const fixed = Number((sum / prices.length).toFixed(1));
    return fixed
}

export default calculateAverage;
