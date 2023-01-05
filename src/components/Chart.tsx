import { SpotData } from "../types";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

interface ChartProps {
    /**
     * Data SpotData[] muodossa
     */
    data: SpotData[];
}

/**
 * Kaavion rekisterijuttuja
 */
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

/**
 * Kaavion säädöt
 */
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Spothinnat',
      },
    },
};

/**
 * Komponentti, joka luo sivulle kaavion datasta.
 * Kaavion luomiseen käytetty Chart.js:ää.
 * 
 * @param props komponentin propsit ChartPropsina
 * @returns komponentin sisältö
 */
const Chart = ( props: ChartProps ) => {
    const labels = props.data.map(d => d.timestamp.split('T')[1].slice(0,5));

    const cdata = {
        labels,
        datasets: [
          {
            label: 'Hinnat snt/kWh (sis. alv 10%)',
            data: props.data.map(d => d.price),
            backgroundColor: 'rgba(37, 36, 34, 0.7)',
            hoverBackgroundColor: 'rgba(37, 36, 34)',
            barPercentage: 1.25,
          },
        ],
    };

    return(
        <div className="chart">
            <Bar options={options} data={cdata} />
        </div>
    )
};

export default Chart;
