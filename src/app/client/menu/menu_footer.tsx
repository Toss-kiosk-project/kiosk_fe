"use client";

import style from "./style.module.css";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { clearOrder } from "@/redux/orderSlice"; // 주문 초기화 액션

const Menu_Footer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const orderList = useSelector((state: RootState) => state.order.list);

  const handleSubmit = () => {
    router.push("/client/cart");
  };

  const handleCancel = () => {
    router.push("/");
  };

  const handleClear = () => {
    dispatch(clearOrder());
  };

  return (
    <div className={style.footer_wrapper}>
      <div>🛒 주문 내역</div>

      {/* 주문 리스트 테이블 */}
      <div className={style.order_list}>
        {orderList.length === 0 ? (
          <p>주문한 항목이 없습니다.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
            <tbody>
              {orderList.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price.toLocaleString()}원</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* 비우기 버튼 */}
      <button onClick={handleClear} className={style.clear_button}>
        비우기
      </button>

      {/* 하단 이동 버튼 */}
      <div className={style.button_wrapper}>
        <button className={style.cancel_button} onClick={handleCancel}>
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
