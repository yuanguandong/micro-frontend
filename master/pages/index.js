import { Button, Col, PageHeader, Row } from "antd";
import React, { useState } from "react";
import { MicroApp, useModel } from "umi";
import style from "./index.css";

export default function () {
  const [app1Name, setApp1Name] = useState("app1");
  const [app2Name, setApp2Name] = useState("app2");
  const { setQiankunGlobalState, globalState } = useModel(
    "@@qiankunStateForSlave"
  );
  const { slogan } = globalState;
  return (
    <div className={style.container}>
      <PageHeader
        className="site-page-header"
        title="主应用操作栏"
        subTitle="This is a subtitle"
        extra={[
          <Button key={1} onClick={() => setApp1Name((s) => s + "change ")}>
            修改App1的名称
          </Button>,
          <Button key={2} onClick={() => setApp2Name((s) => s + "change ")}>
            修改App2的名称
          </Button>,
        ]}
      />
      <Row gutter={[20,20]}>
        <Col span={6} >
          <MicroApp app1Name={app1Name} name="app1" />
        </Col>
        <Col span={18} >
          <MicroApp app2Name={app2Name} name="app2" />
        </Col>
      </Row>
      ,
    </div>
  );
}
