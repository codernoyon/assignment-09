import React, {useEffect, useState} from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    console.log(data);
    return (
        <section>
            <div className="mx-auto w-5/6 py-12">
                <h2 className="text-4xl text-center mb-8">Product Analysis</h2>
                <div className=" grid lg:grid-cols-2 gap-6 items-center justify-between">
                    <div className="chart w-full">
                        <BarChart 
                            width={300}
                            height={300}
                            data={data}
                        
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="sell" stackId="a" fill="#6F2232" />
                            <Bar dataKey="revenue" stackId="a" fill="#C3073F" />
                            <Bar dataKey="investment" fill="#950740" />
                        </BarChart>
                    </div>
                    <div className="chart w-full">
                        <PieChart width={300} height={300}>
                            <Pie data={data} dataKey="sell" cx="50%" cy="50%" outerRadius={60} fill="#950740" />
                            <Pie isAnimationActive={false} data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#C3073F" label />
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                    <div className="chart w-full">
                        <LineChart width={300} height={300} data={data}>
                            <XAxis dataKey="month"/>
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                            <Line type="monotone" dataKey="revenue" stroke="#C3073F" />
                            <Line type="monotone" dataKey="investment" stroke="#950740" />
                        </LineChart>
                    </div>
                    <div className="chart w-full">
                        <AreaChart
                        isAnimationActive={false}
                            width={400}
                            height={300}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="sell" stroke="#6F2232" fill="#6F2232" />
                            <Area type="monotone" dataKey="revenue" stroke="#950740" fill="#950740" />
                            <Area type="monotone" dataKey="investment" stroke="#C3073F" fill="#C3073F" />
                        </AreaChart>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;