"use client";
import { useRouter } from "next/navigation";
import style from "./style.module.css";
import { useState } from "react";

export default function Cart() {
  const [orderList, setOrderList] = useState([
    { name: "아메리카노", price: 3000, quantity: 1 },
    { name: "카페라떼", price: 3500, quantity: 1 },
    { name: "바닐라라떼", price: 4000, quantity: 1 },
    { name: "딸기라떼", price: 4500, quantity: 1 },
    { name: "초코라떼", price: 4500, quantity: 1 },
  ]);
  const totalQuantity = orderList.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = orderList.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleIncrease = (index: number) => {
    const updatedList = [...orderList];
    updatedList[index].quantity += 1;
    setOrderList(updatedList);
  };

  const handleDecrease = (index: number) => {
    const updatedList = [...orderList];
    if (updatedList[index].quantity > 1) {
      updatedList[index].quantity -= 1;
      setOrderList(updatedList);
    }
  };

  const handleDelete = (index: number) => {
    const updatedList = [...orderList];
    updatedList.splice(index, 1); // index 번째 아이템을 1개 삭제
    setOrderList(updatedList);
  };

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
        <div>
          <table className={style.order_table}>
            <tbody>
              {orderList.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}원</td>
                  <td className={style.quantity_cell}>
                    <button type="button" onClick={() => handleDecrease(index)} className={style.small_btn}>
                      -
                    </button>
                    <span className={style.quantity_text}>{item.quantity}개</span>
                    <button type="button" onClick={() => handleIncrease(index)} className={style.small_btn}>
                      +
                    </button>
                  </td>
                  <td>
                    <button type="button" onClick={() => handleDelete(index)} className={style.delete_btn}>
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={style.total}>
          <p>총 수량 : {totalQuantity}개</p>
          <p>총 가격 : {totalPrice.toLocaleString()}원</p>
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
