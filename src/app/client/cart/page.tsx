"use client";
import { useRouter } from "next/navigation";

export default function Cart() {
  const router = useRouter();
  const handleAdd = () => {
    router.push("/client/menu");
  };
  const handleClick = () => {
    router.push("/client/place");
  };
  return (
    <div>
      <h1>주문을 확인하세요.</h1>
      <div>주문 목록</div>
      <div>
        <button onClick={handleAdd}>추가 주문</button>
        <button onClick={handleClick}>결제하기</button>
      </div>
    </div>
  );
}

// 시작 -> 로그인 -> 메뉴 -> 장바구니 -> 옵션 선택(포장, 매장) -> 결제 -> 메뉴
