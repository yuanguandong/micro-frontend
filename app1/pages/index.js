import { Avatar, Button, Card, Typography } from "antd";
import React, { useState } from "react";
import { useModel } from "umi";

const { Meta } = Card;

const { Title, Paragraph, Text, Link } = Typography;

export default function () {
  const { app1Name="app1", globalState={}, setQiankunGlobalState } = useModel("@@qiankunStateFromMaster") || {};
  const [visible, setVisible] = useState(false);

  const {logo="Super", slogan}=globalState
  
  console.log('globalState',globalState)
  // const { slogan } = globalState;
  return (
    <div>
      {/* <h1>Dashboard 1</h1>
      <p>testProp1: {testProp1}</p> */}
      {/* <p>globalState: {JSON.stringify(globalState)}</p> */}

      {/* <h1>MicroAppWithMemoHistory</h1>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开 app2
      </button>

      <Drawer
        title="嵌入 app2"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        width={800}
      >
        <MicroAppWithMemoHistory
          name="app2"
          url="/user"
          current={2}
          pageSize={5}
        />
      </Drawer> */}
      <Card
        style={{ width: '100%' }}
        title={logo}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
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
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={app1Name}
          description={app1Name}
        />
      </Card>
    </div>
  );
}
