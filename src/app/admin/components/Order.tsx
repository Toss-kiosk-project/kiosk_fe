"use client";
import { getData, updateOrder } from "../utils/fetchData";
import styles from "./component.module.css";
import React, { useEffect, useState } from "react";

interface OrderData {
  orderId: string;
  code: string;
  totalPrice: number;
  state: "READY" | "FINISH" | "END";
  orderTime: string;
}
const Order = () => {
  const tableHead = [
    "번호",
    "주문번호",
    "주문 총 금액",
    "주문상태",
    "주문일시",
  ];
  const orderStateMap = {
    READY: "준비중",
    FINISH: "준비완료",
    END: "수령완료",
  };

  const fetchData = async () => {
    const res = await getData("order");
    setOrders(res.orderList);
  };

  const handleChageStatus = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    const selectedValue = e.target.value;
    const res = await updateOrder(id, selectedValue);

    if (res?.isSuccess) {
      alert("주문상태가 변경되었습니다.");
      fetchData();
    } else {
      alert("주문상태 변경에 실패했습니다.");
    }
  };
  const [orders, setOrders] = useState<OrderData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className={styles.title}>주문 목록</div>
      <div className={styles.description}>
        총 <span className={styles.highlight}>{orders.length ?? 0}</span>건의
        주문이 있습니다.
      </div>
      <table className={`${styles.tableElement} ${styles.table}`}>
        <thead>
          <tr>
            {tableHead.map((head) => (
              <th className={styles.tableElement} key={head}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((data, idx) => (
            <tr key={data.orderId}>
              <td className={styles.tableElement}>{idx + 1}</td>
              <td className={styles.tableElement}>{data.code}</td>
              <td className={styles.tableElement}>{data.totalPrice}</td>
              <td className={styles.tableElement}>
                <select
                  className={styles.select}
                  onChange={(e) => handleChageStatus(e, data.orderId)}
                  value={data.state}
                >
                  <option value="READY">준비중</option>
                  <option value="FINISH">준비완료</option>
                  <option value="END">수령완료</option>
                </select>
              </td>
              <td className={styles.tableElement}>{data.orderTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
