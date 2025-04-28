"use client";
import { useRouter } from "next/navigation";
import style from "./style.module.css";
import Image from "next/image";
import Logo from "../../images/dark_logo.png";

export default function Complete() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };
  return (
    <div className={style.wrapper}>
      <Image src={Logo} alt="logo" width={80} />
      <br />
      <h1>주문 완료!</h1>

      <div className={style.complete_wrapper}>
        <div>고객님의 주문번호는 000번 입니다.</div>
        <div>감사합니다.</div>
      </div>
      <div>
        <button type="button" onClick={handleClick} className={style.end_btn}>
          처음으로
        </button>
      </div>
    </div>
  );
}

// 시작 -> 로그인 -> 메뉴 -> 장바구니 -> 옵션 선택(포장, 매장) -> 결제 -> 메뉴
