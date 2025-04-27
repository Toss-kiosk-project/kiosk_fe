"use client";
import { useRouter } from "next/navigation";
import style from "./style.module.css";

export default function Payment() {
  const router = useRouter();
  const handleCancel = () => {
    router.push("/client/cart");
  };
  const handleComplete = () => {
    router.push("/client/complete");
  };
  return (
    <div className={style.wrapper}>
      <h1>결제</h1>
      <div className={style.pay_wrapper}>
        <div>카드를 화살표 방향으로 투입구에 넣어주세요.</div>
        <div className={style.btn_wrapper}>
          <button type="button" onClick={handleCancel} className={style.cancel_btn}>
            취소하기
          </button>
          <button type="button" onClick={handleComplete} className={style.order_btn}>
            결제 완료
          </button>
        </div>
      </div>
    </div>
  );
}

// 시작 -> 로그인 -> 메뉴 -> 장바구니 -> 옵션 선택(포장, 매장) -> 결제 -> 메뉴
