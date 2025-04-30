"use client";
import styles from "./component.module.css";
import React from "react";

const Order = () => {
  const tableHead = [
    "번호",
    "주문번호",
    "주문 총 금액",
    "주문상태",
    "주문일시",
  ];

  const dummyData = [
    {
      num: 1,
      orderNum: "01",
      totalPrice: 10000,
      status: "준비중",
      orderTime: "2023-01-01 12:00:00",
    },
    {
      num: 2,
      orderNum: "02",
      totalPrice: 20000,
      status: "준비완료",
      orderTime: "2023-01-02 14:00:00",
    },
  ];

  const handleChageStatus = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: number
  ) => {
    const selectedValue = e.target.value;
    console.log(selectedValue);
  };
  return (
    <div>
      <div className={styles.title}>주문 목록</div>
      <div className={styles.description}>
        총 <span className={styles.highlight}>3</span>건의 주문이 있습니다.
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
          {dummyData.map((data) => (
            <tr key={data.num}>
              <td className={styles.tableElement}>{data.num}</td>
              <td className={styles.tableElement}>{data.orderNum}</td>
              <td className={styles.tableElement}>{data.totalPrice}</td>
              <td className={styles.tableElement}>
                <select
                  className={styles.select}
                  onChange={(e) => handleChageStatus(e, data.num)}
                >
                  <option value="준비중">준비중</option>
                  <option value="준비완료">준비완료</option>
                  <option value="수령완료">수령완료</option>
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
