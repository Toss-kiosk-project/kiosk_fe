import style from "./style.module.css";

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className={style.header_wrapper}>
        Header <button>이전</button>
      </div>
      <div>{children}</div>
      <div className={style.footer_wrapper}>
        <div>주문 내역</div>
        <div className={style.order_list}>(주문 리스트)</div>
        <button>비우기</button>
        <div className={style.button_wrapper}>
          <button className={style.button}>주문 취소</button>
          <button className={style.button}>주문 완료</button>
        </div>
      </div>
    </div>
  );
}
