import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Label,  CartesianGrid } from 'recharts';

const AvgRangeChart = ({ data }) => {
  // Calculate average range per vehicle type
  const typeRanges = data.reduce((acc, curr) => {
    const type = curr['Electric Vehicle Type'];
    const range = parseFloat(curr['Electric Range']) || 0;
    if (!acc[type]) acc[type] = { total: 0, count: 0 };
    acc[type].total += range;
    acc[type].count += 1;
    return acc;
  }, {});

  const chartData = Object.keys(typeRanges).map(type => ({
    type,
    avgRange: (typeRanges[type].total / typeRanges[type].count).toFixed(2),
  }));

  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold  text-blue-300">Average Electric Range by Vehicle Type</h2>
     
      
        <p className="text-white mt-5">  
      
      •⁠  Battery Electric Vehicles (BEVs) are fully electric vehicles powered by rechargeable battery packs. The bar graph indicates that Battery Electric Vehicles (BEVs) have an average range of 66.83 miles, showcasing their higher electric-only range compared to other vehicle types.
       <br></br>
      •⁠ Plug-in Hybrid Electric Vehicles (PHEVs) combine both an electric motor and a traditional internal combustion engine (ICE), offering a mix of electric and gasoline-powered driving. The bar graph shows that Plug-in Hybrid Electric Vehicles (PHEVs) have an average range of 30.62 miles on electric power alone.
         
  
    <br></br>
           </p>
    
      <br></br>
      <div className="flex justify-center">
      <BarChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="type" stroke="white"/>
        <YAxis stroke="white"/>
        <Tooltip />
        <Bar dataKey="avgRange" fill="#8884d8" />
      </BarChart>
      </div>
      
    </div>
  );
};

export default AvgRangeChart;
