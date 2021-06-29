import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import TopUserContainer from './TopUser/TopUserContainer';

// Style Line Chart
const lineContent =
{
    backgroundColor: "#19293B",
    color: "#FFFFFF",
    height: "auto",
    borderRadius: "8px"
}

// Style Doughnut Chart
const doughnutContent =
{
    backgroundColor: "#19293B",
    color: "#FFFFFF",
    height: "auto",
    borderRadius: "8px"
}

const Dashboard = () => {

    // Config Line Chart  
    const lineData = {
        labels: ["Jan", "Feb", "March", "April", "May",
            "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: 'Visits',
                data: [200, 180, 50, 384, 216, 333, 100, 400, 150, 500, 232, 353],
                backgroundColor: '#178F58',
                borderColor: '#178F58',
            },
        ],
    };

    // Config Doughnut Chart 
    const doughnutData = {
        labels: ['Success'],
        datasets: [
            {
                label: '',
                data: [12, 5],
                backgroundColor: [
                    '#178F58',
                    '#19293B',
                ],
                borderWidth: 0,
                weight: 1
            },
        ],
    };

    return (
        <div className="col-12 ms-5">
            <div className="row">
                <div style={lineContent} className="col-7 p-3 m-2">
                    <h4>Visit</h4>
                    <Line data={lineData} />
                </div>

                <div className="col-4">
                    <div className="row">
                        <div style={doughnutContent} className="col-5 p-3 m-2">
                            <h5>Total traffic</h5>
                            <Doughnut data={doughnutData} />
                        </div>
                        
                        <div style={doughnutContent} className="col-5 p-3 m-2">
                            <h5>Total traffic</h5>
                            <Doughnut data={doughnutData} />
                        </div>
                    </div>

                    <div className="row">
                        <div style={doughnutContent} className="col-5 p-3 m-2">
                            <h5>Total traffic</h5>
                            <Doughnut data={doughnutData} />
                        </div>

                        <div style={doughnutContent} className="col-5 p-3 m-2">
                            <h5>Total traffic</h5>
                            <Doughnut data={doughnutData} />
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
            <TopUserContainer className="col-12"></TopUserContainer>
            </div>

        </div>
    );
}

export default Dashboard;