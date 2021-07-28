import { Breadcrumb, Button, Layout, Menu } from "antd";
import { connect } from "dva";
import React, { useEffect } from "react";
import { Link, useModel } from "umi";
import style from "./style.less";

const { Header, Content, Footer } = Layout;

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

  useEffect(() => {
    dispatch({
      type: "base/getApps",
    });
  }, []);

  return (
    // <ConfigProvider prefixCls="gantmaster">
      <Layout className={style.layout}>
        <Header>
          <div className={style.logo}>{logo}</div>

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            selectedKeys={[selectKey]}
            style={{ lineHeight: "64px" }}
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
        </Header>
        <Content className={style.content}>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>{renderBreadCrumb(location.pathname)}</div>
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
    // </ConfigProvider>
  );
};

export default connect(({ base }) => ({ base }))(MainLayout);
