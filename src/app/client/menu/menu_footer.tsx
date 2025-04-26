"use client";

import style from "./style.module.css";
import { useRouter } from "next/navigation";

const Menu_Footer = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/client/cart");
  };
  const handelCancel = () => {
    router.push("/");
  };
  return (
    <div className={style.footer_wrapper}>
      <div>주문 내역</div>
      <div className={style.order_list}>(주문 리스트)</div>
      <button>비우기</button>
      <div className={style.button_wrapper}>
        <button className={style.button} onClick={handelCancel}>
          주문 취소(처음으로)
        </button>
        <button className={style.button} onClick={handleSubmit}>
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default Menu_Footer;
