"use client";
import React from "react";
import styles from "../../components/component.module.css";
import { useRouter } from "next/navigation";

const UpdateMember = () => {
  const tableHead = [
    { head: "아이디", isReadOnly: false, type: "text" },
    { head: "암호", isReadOnly: true, type: "password" },
    { head: "이름", isReadOnly: false, type: "text" },
    { head: "가입일", isReadOnly: true, type: "text" },
  ];
  const router = useRouter();
  const handleClickCancelBtn = () => {
    router.push("/admin");
  };

  const handleChangeRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    console.log(selectedValue);
  };
  return (
    <div>
      <div className={styles.title}>회원정보 수정</div>
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
          <tr>
            <th className={styles.tableElement}>권한</th>
            <td className={styles.tableElement}>
              <select className={styles.select} onChange={handleChangeRole}>
                <option value="admin">ADMIN</option>
                <option value="user">USER</option>
              </select>
            </td>
          </tr>
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

export default UpdateMember;
