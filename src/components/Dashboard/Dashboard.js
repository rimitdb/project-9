import React from 'react';
import AreaC from '../Chart/AreaC';
import LineC from '../Chart/LineC';
import './Dashboard.css';


const Dashboard = () => {

    return (
        <div >
            <div className='first-chart-section'>
                <div>
                    <h3>Month Wise Sales Report</h3>
                    <LineC></LineC>
                </div>
                <div>
                    <h3>Investment vs Revenue Report</h3>
                    <AreaC></AreaC>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;