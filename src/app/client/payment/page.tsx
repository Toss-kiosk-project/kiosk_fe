"use client";
import { useRouter } from "next/navigation";

export default function Payment() {
  const router = useRouter();
  const handleCancel = () => {
    router.push("/client/cart");
  };
  const handleComplete = () => {
    router.push("/client/complete");
  };
  return (
    <div>
      <h1>결제</h1>
      <div>카드를 화살표 방향으로 투입구에 넣어주세요.</div>
      <div>
        <button onClick={handleCancel}>취소하기</button>
        <button onClick={handleComplete}>결제 완료</button>
      </div>
    </div>
  );
}

// 시작 -> 로그인 -> 메뉴 -> 장바구니 -> 옵션 선택(포장, 매장) -> 결제 -> 메뉴
