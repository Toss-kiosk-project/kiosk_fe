import styles from "./admin-layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>키오스크 관리자 화면</div>
      <div className={styles.layoutContainer}>
        <div className={styles.sidebar}>
          <div className={styles.menuItem}>회원관리</div>
          <div className={styles.menuItem}>상품관리</div>
          <div className={styles.menuItem}>주문관리</div>
        </div>
        {children}
      </div>
    </div>
  );
}
