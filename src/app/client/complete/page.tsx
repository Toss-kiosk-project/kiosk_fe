"use client";
import { useRouter } from "next/navigation";

export default function Complete() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };
  return (
    <div>
      <h1>주문 완료!</h1>
      <div>고객님의 주문번호는 000번 입니다.</div>
      <div>
        <button onClick={handleClick}>처음으로</button>
      </div>
    </div>
  );
}

// 시작 -> 로그인 -> 메뉴 -> 장바구니 -> 옵션 선택(포장, 매장) -> 결제 -> 메뉴
