import React from 'react';
import { Bar } from 'react-chartjs-2';

const RatingChart = ({rateList}) => {

    const data = {
        labels: ['1 Points', '2 Points', '3 Points', '4 Points', '5 Points'],
        datasets: [
            {
                label: "# of ratings",
                data: [rateList.one, rateList.two, rateList.three, rateList.four, rateList.five],
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
        <div className="col-12 col-md-6 h-auto">
            <h5 className="py-2">Rating</h5>
            <Bar className="trailer" style={{ backgroundColor: "#19293B"}} data={data} options={options} />
        </div>
    );
}

export default RatingChart;