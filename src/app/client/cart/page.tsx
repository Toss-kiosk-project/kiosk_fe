"use client";
import { useRouter } from "next/navigation";
import style from "./style.module.css";

export default function Cart() {
  const router = useRouter();
  const handleAdd = () => {
    router.push("/client/menu");
  };
  const handleClick = () => {
    router.push("/client/place");
  };
  return (
    <div className={style.wrapper}>
      <h1>주문을 확인하세요.</h1>
      <div className={style.cart_wrapper}>
        <div>주문 목록</div>
        <div className={style.total}>
          <p>총 수량 : n개</p>
          <p>총 가격 : 000원</p>
        </div>

        <div className={style.btn_wrapper}>
          <button type="button" onClick={handleAdd} className={style.add_btn}>
            추가 주문
          </button>
          <button type="button" onClick={handleClick} className={style.order_btn}>
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}

// 시작 -> 로그인 -> 메뉴 -> 장바구니 -> 옵션 선택(포장, 매장) -> 결제 -> 메뉴
