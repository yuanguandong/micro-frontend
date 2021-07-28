import { Bar } from "@ant-design/charts";
import { Button, Card } from 'antd';
import { default as React, useState } from "react";
import { useModel } from "umi";

const { Meta } = Card;


const DemoBar = (props) => {
  const { app2Name="app2", globalState={}, setQiankunGlobalState } = useModel("@@qiankunStateFromMaster") || {};
  const [visible, setVisible] = useState(false);

  const {logo="super", slogan}=globalState
  
  console.log('globalState',globalState)
  var data = [
    {
      type: "家具家电",
      sales: 38,
    },
    {
      type: "粮油副食",
      sales: 52,
    },
    {
      type: "生鲜水果",
      sales: 61,
    },
    {
      type: "美容洗护",
      sales: 145,
    },
    {
      type: "母婴用品",
      sales: 48,
    },
    {
      type: "进口食品",
      sales: 38,
    },
    {
      type: "食品饮料",
      sales: 38,
    },
    {
      type: "家庭清洁",
      sales: 38,
    },
  ];
  var config = {
    data: data,
    xField: "sales",
    yField: "type",
    legend: { position: "top-left" },
    barBackground: { style: { fill: "rgba(0,0,0,0.1)" } },
    interactions: [
      {
        type: "active-region",
        enable: false,
      },
    ],
  };
  return (
    <Card
      size="small"
      title={`${app2Name}`}
      extra={<a href="#">More</a>}
      style={{ width: '100%' }}
      actions={[
        <Button
          style={{ margin: 10 }}
          key={1}
          onClick={() =>
            setQiankunGlobalState({
              ...globalState,
              logo: logo === "super" ? "一汽大众" : "super",
            })
          }
        >
          修改全局logo
        </Button>
      ]}
    >
      <h2>{logo}</h2>
      <Bar {...config} />
    </Card>
  );
};

export default DemoBar;
