"use client";
import { useRouter } from "next/navigation";
import style from "./style.module.css";
import Image from "next/image";
import Card from "../../images/card.png";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Payment() {
  const router = useRouter();
  const orderList = useSelector((state: RootState) => state.order.list);
  const totalQuantity = orderList.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = orderList.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCancel = () => {
    router.push("/client/cart");
  };
  const handleComplete = async () => {
    // redux 데이터 중 totalPrice(총액), menuNum(메뉴 갯수) POST
    await fetch("http://localhost:8080/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        totalPrice: totalPrice,
        menuNum: totalQuantity,
      }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        console.log(res);
        const orderId = res.orderId;

        await fetch(`http://localhost:8080/api/order/code?orderId=${orderId}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res.orderCode);
            router.push(`/client/complete?orderCode=${res.orderCode}`);
          });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  return (
    <div className={style.wrapper}>
      <h1>결제</h1>
      <div className={style.pay_wrapper}>
        <div className={style.text_center}>
          카드를 화살표 방향으로
          <br />
          투입구에 넣어주세요.
        </div>
        <Image src={Card} alt="pay" width={200} />
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
