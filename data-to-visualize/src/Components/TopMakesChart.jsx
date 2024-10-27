import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const TopMakesChart = ({ data }) => {
  // Count occurrences of each make
  const makeCounts = data.reduce((acc, curr) => {
    const make = curr.Make;
    acc[make] = (acc[make] || 0) + 1;
    return acc;
  }, {});

  // Prepare top 5 makes data
  const sortedMakes = Object.entries(makeCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([make, count]) => ({ make, count }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA0E27'];

  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold  text-blue-300">Top EV Manufacturers</h2>
      
      <br></br>
      
     <p className="text-white" > Following Pie chart gives the following information:
        <br></br>
                                 •⁠  ⁠Tesla leads as the top electric vehicle (EV) manufacturer, dominating the market with the highest share.
                                 <br></br>
                                 •⁠  ⁠Nissan follows as the second most popular EV brand, showing strong consumer preference.
                                 <br></br>
                                 •⁠  ⁠Chevrolet ranks third, maintaining a notable presence in the EV segment
                                 <br></br>
                                 •⁠  ⁠BMW holds the fourth position, catering to a distinct segment of EV buyers.
                                 <br></br>
                                 •⁠  ⁠Ford rounds out the top five, contributing to the growing adoption of EV technology.
                                 <br></br>
</p>
      
      <div className="flex justify-center">
      <PieChart width={400} height={400}>
        <Pie
          data={sortedMakes}
          dataKey="count"
          nameKey="make"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
        >
          {sortedMakes.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      </div>
     
     
    </div>
  );
};

export default TopMakesChart;
