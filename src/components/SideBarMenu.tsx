import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu, Modal, Space } from "antd";
import { SlHome } from "react-icons/sl";
import {
  IoChatbubbleEllipsesOutline,
  IoLogOutOutline,
  IoPersonOutline,
} from "react-icons/io5";
import Link from "next/link";

import styled from "styled-components";

const StyledMenu = styled(Menu)`
  .ant-menu-item {
    align-items: center;
    justify-content: center;
    padding: 8px !important;
    transition: background-color 0.3s;
  }

  .ant-menu-item:hover {
    background-color: #f8f8f8;
    color: black;
  }

  .ant-menu-item:focus {
    outline: none;
  }

  .ant-menu-item-active,
  .ant-menu-item-selected {
    background-color: #f8f8f8;
    color: black;
  }
`;

// Add this styled component for the icons
const IconStyled = styled.div`
  width: 90px; // Adjust width for larger icons
  height: 90px; // Adjust height for larger icons
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 30px; // Increase icon size
    color: #000646; // Icon color
  }
`;

const SideBarMenu = () => {
  const [open3, setOpen3] = useState(false);
  const handleOpenModal = () => {
    setOpen3(true);
  };
  const handleCancel3 = () => {
    setOpen3(false);
  };
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("/user");
  const router = useRouter();

  useEffect(() => {
    setSelectedKey(router.pathname);
  }, [router.pathname]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const { t } = useTranslation();

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://legality-back1-production.up.railway.app/users/logout",
        {},
        { withCredentials: true },
      );
      document.cookie = "jwt=; path=/; expires=Thu, 01 Jan 3000 00:00:00 GMT";
      router.push("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const items = [
    {
      key: "/user",
      icon: <SlHome className="h-7 w-7 text-[black]" />,
      label: (
        <Link href="/user">{mounted ? t("common.home") : "Loading..."}</Link>
      ),
    },
    {
      key: "/user/userProfile",
      icon: <IoPersonOutline className="h-7 w-7 text-[black]" />,
      label: (
        <Link href="/user/userProfile">
          {mounted ? t("common.profile") : "Loading..."}
        </Link>
      ),
    },
    {
      key: "/chat",
      icon: <IoChatbubbleEllipsesOutline className="h-7 w-7 text-[black]" />,
      label: (
        <Link href="/chat">{mounted ? t("common.chat") : "Loading..."}</Link>
      ),
    },
  ];

  return (
    <div
      className={`fixed left-0 top-0 z-10 h-full bg-white font-serif text-black transition-all duration-500 ${collapsed ? "w-20" : "w-64"}`}
    >
     <div
        style={{
          display: "flex",
          justifyContent: "flex-end", // Align burger to the right
          alignItems: "center",
          height: "60px",
          paddingRight: "10px", // Add padding for spacing
        }}
      >
        <Button
          onClick={toggleCollapsed}
          style={{ marginBottom: 16, fontSize: "20px" }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <Modal
        open={open3}
        onCancel={handleCancel3}
        footer={[
          <Button key="back" onClick={handleCancel3}>
            {t("common.no")}
          </Button>,
          <Button key="submit" type="primary" onClick={handleLogout}>
            {t("common.yes")}
          </Button>,
        ]}
      >
        <p> {t("common.confirmLogOut")}</p>
      </Modal>
      <StyledMenu
        selectedKeys={[selectedKey]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items.map((item) => ({
          ...item,
          icon: React.cloneElement(item.icon, { style: { fontSize: "20px" } }),
          style: { fontWeight: "bold" },
        }))}
        style={{ flexGrow: 1, fontSize: "14px", color: "black" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          width: "100%",
          marginBottom: "16px",
        }}
      >
        <Menu
          mode="inline"
          theme="light"
          style={{ fontWeight: "bold", fontSize: "14px", color: "black" }}
          inlineCollapsed={collapsed}
          items={[
            {
              key: "logout",
              icon: <IoLogOutOutline className="h-7 w-7 text-[black]" />,
              label: (
                <a onClick={handleOpenModal}>
                  {mounted ? t("common.logOut") : "Loading..."}{" "}
                </a>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SideBarMenu;
