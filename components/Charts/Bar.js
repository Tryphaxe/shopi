"use client"

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false,
    },
    title: {
      display: false,
      text: 'Graphique en Barres', // Titre du graphique
    },
  },
};

const labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Ventes 2023',
      data: [120, 190, 300, 500, 200, 300, 450], // Données pour chaque mois
      backgroundColor: 'rgba(255, 99, 132, 0.5)', // Couleur des barres
    },
    {
      label: 'Ventes 2024',
      data: [150, 250, 400, 600, 300, 350, 500],
      backgroundColor: 'rgba(54, 162, 235, 0.5)', // Couleur des barres
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;