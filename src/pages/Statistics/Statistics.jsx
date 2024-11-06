import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics";
  }, []);

  const data1 = useLoaderData();
  console.log(data1);
  return (
    <div>
      <div className="mx-11 flex flex-col items-center text-center space-y-6 bg-[#9538E2] h-[250px] rounded-2xl">
        <h1 className="text-5xl font-bold text-white w-[1100px] mt-14">
          Statistics
        </h1>
        <p className="text-white w-[790px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className=" flex justify-center items-center mt-6">
        <ComposedChart
          width={1100}
          height={500}
          data={data1}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="price"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="price" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="price" stroke="#ff7300" />
          <Scatter dataKey="rating" fill="red" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Statistics;
