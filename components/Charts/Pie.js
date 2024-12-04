import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Rouge', 'Bleu', 'Jaune'],
  datasets: [
    {
      label: 'Votes',
      data: [12, 19, 3], // Données du graphique
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', // Rouge
        'rgba(54, 162, 235, 0.5)', // Bleu
        'rgba(255, 206, 86, 0.5)', // Jaune
      ],
    },
  ],
};

export const options = {
  responsive: true,
  cutout: "80%",
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true, // Activer les infobulles
    },
  },
};

const PieChart = () => {
  return <Doughnut data={data} options={options} />;
};

export default PieChart;