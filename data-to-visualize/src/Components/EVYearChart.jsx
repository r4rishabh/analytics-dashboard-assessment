import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip,Line, CartesianGrid } from 'recharts';

const EVYearChart = ({ data }) => {
  // Calculate EV count per model year
  
  const yearCounts = data.reduce((acc, curr) => {
    const year = curr['Model Year'];
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

 

  const chartData = Object.keys(yearCounts).map(year => ({
    year,
    count: yearCounts[year],
  }));

  return (
    <div className="px-4">
      

      <h2 className="text-2xl font-bold  text-blue-300">EV Count by Model Year</h2>
     
      
        <p className="text-white mt-5"> The chart below shows the number of EV vehicles sold in several years starting from 1998 to 2024. 
           EV sales have shown a consistent upward trend, indicating growing adoption and interest in electric vehicles globally. This reflects rising consumer awareness of environmental concerns and advancements in EV technology. The EV sales counts were 1, 1, 1, 2, 10, 199, and 390 during the years 1998, 2000, 2002, 2008, 2010, 2011, and 2012, respectively, reflect the initial stages of EV introduction to the market. This gradual increase indicates early adoption, as EV technology began to gain traction and awareness among consumers. 
           Certain years i.e. 2023 stand out with sharper sales increases, likely driven by factors like government incentives, new EV model launches, or advancements in battery technology, which made EVs more attractive to consumers. A sharp decrease in EV sales from over 16,000 units in 2023 to just 2,085 in 2024 could be due to several potential factors:
           <br></br>
           •⁠  ⁠Supply Chain Issues: Ongoing or new disruptions could have severely limited production capacity and availability of EVs.
           <br></br>
           •⁠  ⁠Economic Slowdown: An economic downturn or increased inflation could impact consumer purchasing power, leading people to delay big-ticket purchases like EVs.
           <br></br>
           •⁠  ⁠Reduced Incentives: If government subsidies or tax incentives for EVs were reduced or removed, this could have dampened consumer interest, as incentives often make EVs more competitive with traditional vehicles.
           <br></br>
           
  
    <br></br>
           </p>
    
      <br></br>

      <div className="flex justify-center">
      <BarChart width={600} height={300} data={chartData}>
         <CartesianGrid strokeDasharray="3 3" /> 
        <XAxis dataKey="year" stroke="white"/>
        {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} /> */}
        <YAxis stroke="white"/>
        
        <Tooltip />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
      </div>
     
    </div>
  );
};

export default EVYearChart;
