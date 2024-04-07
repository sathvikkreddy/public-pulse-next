"use client";

import { useState } from "react";
import InputBox from "../../components/InputBox";
import Analysis from "../../components/Analysis";
import Progressbar from "../../components/Progressbar";

const sampleData = {
  topPositiveReviews: ["No Positive Reviews"],
  topNegativeReviews: ["No Negative Reviews"],
  keywords: ["No Keywords"],
  rating: 0,
  verdict: "Submit a valid url for the verdict",
};

const Dashboard = () => {
  const [data, setData] = useState(sampleData);
  const [progress, setProgress] = useState(0);
  return (
    <div className="flex flex-col h-screen">
      <InputBox setData={setData} setProgress={setProgress} />
      <Progressbar progress={progress} />
      <Analysis data={data} />
    </div>
  );
};

export default Dashboard;
