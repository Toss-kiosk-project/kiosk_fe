"use client";

import styles from "./admin-layout.module.css";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>키오스크 관리자 화면</div>

      <div className={styles.layoutContainer}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
