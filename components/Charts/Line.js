"use client"

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false,
    },
    title: {
      display: false,
      text: 'Graphique en ligne avec Chart.js', // Titre du graphique
    },
  },
};

const labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Ventes',
      data: [100, 200, 150, 300, 250, 400, 350], // Données du graphique
      borderColor: 'rgb(75, 192, 192)', // Couleur de la ligne
      backgroundColor: 'rgba(75, 192, 192, 0.5)', // Couleur de remplissage
    },
  ],
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};

export default LineChart;