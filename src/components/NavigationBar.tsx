import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Space } from "antd";
// import { UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { MenuProps } from "antd";
import "../styles/index.css";

const items = [
  {
    label: (
      <Space wrap>
        <Button type="text">
          <NavLink to="/home">Home</NavLink>
        </Button>
      </Space>
    ),
    key: "home",
  },

  {
    label: (
      <Space wrap>
        <Button type="text">
          <Link to="/about">About</Link>
        </Button>
      </Space>
    ),
    key: "about",
  },
  {
    label: (
      <Space wrap>
        <Button type="text">
          <Link to="/tc">Terms & Condition</Link>
        </Button>
      </Space>
    ),
    key: "terms",
  },
  {
    label: (
      <Space wrap>
        <Button type="text">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </Space>
    ),
    key: "contact",
  },
  {
    label: (
      <Space wrap>
        <Button type="text">
          <Link to="/contact">Login</Link>
        </Button>
      </Space>
    ),
    key: "login",
  },
];

// const AppLogin = () => (
//   <Button type="primary" className="float-right">
//     <Link to="/login">Login</Link>
//   </Button>
// );

const App: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        className="flex justify-center bg-blue-400"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      {/* <AppLogin /> */}
    </>
  );
};

export default App;
