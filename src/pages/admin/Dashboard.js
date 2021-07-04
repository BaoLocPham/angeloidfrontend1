import React, { useEffect, useState } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import TopUser from './TopUser/TopUser';
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
    // Declare Variables
    const [TopUsers, setTopUsers] = useState([]);
    const [loginTimes, setLoginTimes] = useState([]);

    // Fetch All Login Time of User
    const listAllLoginTimes = () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/user/LoginTime`)
            .then(res => res.json())
            .then(res => {
                setLoginTimes(res);
            });
    }

    const listTopUsers = () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/user/topuser`)
            .then(res => res.json())
            .then(res => {
                setTopUsers(res);
            });
    }

    useEffect(() => {
        listAllLoginTimes();
        listTopUsers();
    }, []);

    // Config Line Chart  
    const lineData = {
        labels: ["Jan", "Feb", "March", "April", "May",
            "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: 'Visits',
                data: loginTimes,
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
                    <h4>Login Time</h4>
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
                <TopUserContainer TopUsers={TopUsers} className="col-12"></TopUserContainer>
            </div>

        </div>
    );
}

export default Dashboard;