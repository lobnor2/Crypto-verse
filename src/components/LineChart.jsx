import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  return (
    <div>
      LineChart
      <h1>{coinHistory}</h1>
      <h1>{currentPrice}</h1>
      <h1>{coinName}</h1>
    </div>
  );
};

export default LineChart;
