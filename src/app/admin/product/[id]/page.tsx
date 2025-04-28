"use client";
import React from "react";
import styles from "../../components/component.module.css";
import { useRouter } from "next/navigation";

const UpdateProduct = () => {
  const tableHead = [
    { head: "이름", isReadOnly: false, type: "text" },
    { head: "이미지", isReadOnly: false, type: "file" },
    { head: "가격", isReadOnly: false, type: "text" },
    { head: "카테고리", isReadOnly: false, type: "text" },
  ];
  const router = useRouter();
  const handleClickCancelBtn = () => {
    router.push("/admin");
  };

  return (
    <div>
      <div className={styles.title}>상품정보 수정</div>
      <table className={`${styles.tableElement} ${styles.table}`}>
        <tbody>
          {tableHead.map((head) => (
            <tr key={head.head}>
              <th className={styles.tableElement}>{head.head}</th>
              <td className={styles.tableElement}>
                <input
                  className={styles.input}
                  readOnly={head.isReadOnly}
                  type={head.type}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.buttonWrapper}>
        <button className={`${styles.button} ${styles.updateBtn}`}>
          수정하기
        </button>
        <button
          className={`${styles.button} ${styles.deleteBtn}`}
          onClick={handleClickCancelBtn}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;
