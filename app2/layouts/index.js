import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default ({ children }) => (
<div>
    {/* <Sider width={200} className={style.sider}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="dashboard">
          <Link to="/">App2 Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="user">
          <Link to="/user">User</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      {children}
    </Content> */}
    {children}
</div>
);
