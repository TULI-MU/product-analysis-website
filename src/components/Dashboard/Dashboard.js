import React from 'react';
import { useEffect, useState } from "react"
import { Area, Bar, CartesianGrid, ComposedChart, Legend, LineChart, Pie, PieChart, Scatter, Tooltip, XAxis, YAxis, BarChart } from 'recharts';
import { Line } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])



    return (
        <div className='chart'>
            <LineChart width={400} height={500} data={data}>
                <Line dataKey={"month"}></Line>
                <Line dataKey={"revenue"} stroke="#FF0000" type="monotone"></Line>
                <Line dataKey={"investment"}></Line>
                <XAxis dataKey={"sell"}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </LineChart>

            <PieChart width={400} height={400}>
                <Pie data={data} dataKey={"month"} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data} dataKey={"sell"} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Tooltip></Tooltip>
            </PieChart>

            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="month" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="investment" stroke="#ff7300" />
                <Scatter dataKey="sell" fill="red" />
            </ComposedChart>
            <BarChart width={400} height={300} data={data}>
                <Bar dataKey="pv" fill="#8884d8" />
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Dashboard;