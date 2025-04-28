"use client";
import React from "react";
import styles from "./component.module.css";

const Member = () => {
  const tableHead = [
    "번호",
    "아이디",
    "암호",
    "이름",
    "권한",
    "가입일",
    "수정",
    "삭제",
  ];
  let dummyData = [
    {
      num: 1,
      id: "홍길동",
      password: "1234",
      name: "홍길동",
      role: "관리자",
      date: "2023-01-01",
    },
    {
      num: 2,
      id: "김철수",
      password: "1234",
      name: "김철수",
      role: "회원",
      date: "2023-01-02",
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
        총 <span className={styles.highlight}>3</span>명의 회원이 있습니다.
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
              <td className={styles.tableElement}>{data.id}</td>
              <td className={styles.tableElement}>{data.password}</td>
              <td className={styles.tableElement}>{data.name}</td>
              <td className={styles.tableElement}>{data.role}</td>
              <td className={styles.tableElement}>{data.date}</td>
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

export default Member;
