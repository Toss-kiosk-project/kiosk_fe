"use client";

import { useState, useEffect } from "react";
import styles from "./admin-layout.module.css";
import Sidebar from "./components/Sidebar";
import Member from "./components/Member";
import Product from "./components/Product";
import Order from "./components/Order";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sideNum, setSideNum] = useState(0);
  const pathName = usePathname();
  const router = useRouter();

  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(admin);

    if (!admin) {
      router.replace("/admin/login");
    }
  }, [router, pathName]);

  if (isAdmin === null) return null;

  // if (!isAdmin) return null;

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
  const hanldeClickLogoutBtn = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    router.push("/admin/login");
  };

  return (
    <div className={styles.wrapper}>
      {isAdmin ? (
        <>
          <div className={styles.title}>
            키오스크 관리자 화면
            <button onClick={hanldeClickLogoutBtn}>로그아웃</button>
          </div>
          <div className={styles.layoutContainer}>
            <Sidebar sideNum={sideNum} setSideNum={setSideNum} />
            <div className={styles.section}>{renderComponent()}</div>
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
}
