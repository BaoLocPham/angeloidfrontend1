import React from 'react';
import { Bar } from 'react-chartjs-2';

const RatingChart = () => {
    const data = {
        labels: ['1 Points', '2 Points', '3 Points', '4 Points', '5 Points'],
        datasets: [
            {
                label: "# of ratings",
                data: [10, 20, 46, 150, 96],
                backgroundColor: [
                    '#EC294B',
                    '#FF7171',
                    '#F2AC57',
                    '#14A38B',
                    '#0880AE',
                ],
                borderWidth: 1,
            },
        ],
    };
    
    const options = {
        scales: {
            y: {
                display: false
            },
            title: {
                display: false
            },
            labels: {
                display: false
            }
        },
    };
    return (
        <div className="w-100 h-auto" style={{ backgroundColor: "#19293B" }}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default RatingChart;