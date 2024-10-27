import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import Navbar from "./Components/Navbar";
import EVYearChart from './Components/EVYearChart';
import TopMakesChart from './Components/TopMakesChart';
import AvgRangeChart from './Components/AvgRangeChart';





const App = () => {

  const [data, setData] = useState([]);


  useEffect(() => {
    d3.csv('../Electric_Vehicle_Population_Data.csv').then(setData);
  }, []);
  



  return (
    <div className="min-h-screen flex flex-col  bg-bgDark2">

      <div>
        <Navbar/>
      </div>

      <div className="flex-col  flex  space-x-4 gap-y-4 mx-auto py-4 justify-center">
      <EVYearChart data={data} />
      <TopMakesChart data={data} />
      <AvgRangeChart data={data} />
      </div>
     
    </div>
  );
};

export default App;
