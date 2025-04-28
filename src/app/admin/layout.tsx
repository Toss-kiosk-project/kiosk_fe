"use client";

import { useState } from "react";
import styles from "./admin-layout.module.css";
import Sidebar from "./components/Sidebar";
import Member from "./components/Member";
import Product from "./components/Product";
import Order from "./components/Order";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sideNum, setSideNum] = useState(0);
  const renderComponent = () => {
    switch (sideNum) {
      case 0:
        return <Member />;
      case 1:
        return <Product />;
      case 2:
        return <Order />;
      default:
        return <Member />;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>키오스크 관리자 화면</div>
      <div className={styles.layoutContainer}>
        <Sidebar sideNum={sideNum} setSideNum={setSideNum} />
        <div className={styles.section}>{renderComponent()}</div>
      </div>
    </div>
  );
}
