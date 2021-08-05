import { Breadcrumb, Button, Layout, Menu } from "antd";
import { connect } from "dva";
import React, { useEffect, useState } from "react";
import { Link, useModel } from "umi";
import Login from '../pages/login';
import style from "./style.less";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const renderBreadCrumb = (pathname) => {
  let arr = pathname.split("/").slice(1);
  if (arr[0] === "") {
    arr[0] = "Home";
  }
  return (
    <Breadcrumb className={style.breadcrumb}>
      {arr.map((name) => {
        return <Breadcrumb.Item key={name}>{name}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

// @connect(({ base }) => ({ base }))
const MainLayout = (props) => {
  const { location, children, base, dispatch } = props;
  const { name, apps } = base;
  
  const { globalState = {}, setQiankunGlobalState } =
    useModel("@@qiankunStateForSlave") || {};
  const { logo = "" } = globalState;
  const selectKey = "/" + location.pathname.split("/")[1];

  const [loginVisible,setLoginVisible] = useState(false)

  useEffect(() => {
    dispatch({
      type: "base/getApps",
    });
  }, []);

  return (
    <>
    <Layout className={style.layout}>
      <Header style={{ height: 40, padding: "0 0px", display: "flex" }}>
        <div className={style.logo}>{logo}</div>
        <div style={{ flex: 1 }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            selectedKeys={[selectKey]}
            style={{ lineHeight: "40px" }}
          >
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            {apps.map((app, index) => {
              // if (index === 2) {
              //   return (
              //     <Menu.Item key={app.to}>
              //       <Link to="/app3/123">{app.name}</Link>
              //     </Menu.Item>
              //   );
              // }
              return (
                <Menu.Item key={app.to}>
                  <Link to={app.to}>{app.name}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </div>
        <div
          style={{
            color: "#fff",
            textAlign: "center",
            lineHeight: '40px',
            padding: "0 20px",
            cursor:'pointer'
          }}
          onClick={()=>{setLoginVisible(true)}}
        >
          登录
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" title={<span>subnav 1</span>}>
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span>subnav 2</span>}>
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span>subnav 3</span>}>
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout style={{ padding: "0 10px 10px" }}>
          <Content className={style.content}>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {renderBreadCrumb(location.pathname)}
              </div>
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
            </div>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
    <Login visible={loginVisible} setLoginVisible={setLoginVisible}/>
    </>
  );
};

export default connect(({ base }) => ({ base }))(MainLayout);
