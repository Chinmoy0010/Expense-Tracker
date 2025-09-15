import React from 'react';
import { Bar } from 'react-chartjs-2';

const Visualization = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Income',
                data: data.income,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Expenses',
                data: data.expenses,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Financial Overview</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default Visualization;