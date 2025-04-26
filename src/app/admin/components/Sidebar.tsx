"use client";
import { useState } from "react";
import styles from "../admin-layout.module.css";

interface SidebarItemProps {
  item: { id: number; title: string };
  isActive: boolean;
  onClick: (id: number) => void;
}

const menuItems = [
  { id: 0, title: "회원관리" },
  { id: 1, title: "상품관리" },
  { id: 2, title: "주문관리" },
];

const SidebarItem = ({ item, isActive, onClick }: SidebarItemProps) => (
  <div
    className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
    onClick={() => onClick(item.id)}
  >
    {item.title}
  </div>
);

const Sidebar = () => {
  const [sideNum, setSideNum] = useState(0);

  const handleClickSidebar = (newSideNum: number) => {
    setSideNum(newSideNum);
  };

  return (
    <div className={styles.sidebar}>
      {menuItems.map((item) => (
        <SidebarItem
          key={item.id}
          item={item}
          isActive={sideNum === item.id}
          onClick={handleClickSidebar}
        />
      ))}
    </div>
  );
};

export default Sidebar;
