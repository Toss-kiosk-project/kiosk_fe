"use client";

import React from "react";
import styles from "./component.module.css";

const Product = () => {
  const tableHead = [
    "번호",
    "이름",
    "이미지",
    "가격",
    "카테고리",
    "수정",
    "삭제",
  ];

  const dummyData = [
    {
      num: 1,
      name: "상품1",
      image: "image1.jpg",
      price: 10000,
      category: "카테고리1",
    },
    {
      num: 2,
      name: "상품2",
      image: "image2.jpg",
      price: 20000,
      category: "카테고리2",
    },
    {
      num: 3,
      name: "상품3",
      image: "image3.jpg",
      price: 30000,
      category: "카테고리3",
    },
  ];

  const handleClickDeleteBtn = (id: number) => {
    if (confirm("삭제하시겠습니까?")) {
      alert("삭제되었습니다.");
    }
  };

  return (
    <div>
      <div className={styles.title}>회원 목록</div>
      <div className={styles.description}>
        총 <span className={styles.highlight}>3</span>개의 상품이 있습니다.
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
              <td className={styles.tableElement}>{data.name}</td>
              {/* <td className={styles.tableElement}>{data.image}</td> */}
              <td className={styles.tableElement}>이미지</td>
              <td className={styles.tableElement}>{data.price}</td>
              <td className={styles.tableElement}>{data.category}</td>
              <td className={styles.tableElement}>
                <button className={`${styles.button} ${styles.updateBtn}`}>
                  수정
                </button>
              </td>
              <td className={styles.tableElement}>
                <button
                  className={`${styles.button} ${styles.deleteBtn}`}
                  onClick={() => handleClickDeleteBtn(data.num)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
