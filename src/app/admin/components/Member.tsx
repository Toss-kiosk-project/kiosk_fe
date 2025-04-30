"use client";
import React, { useEffect, useState } from "react";
import styles from "./component.module.css";
import { useRouter } from "next/navigation";
import { deleteData, getData } from "../utils/fetchData";

interface UserData {
  userId: string;
  email: string;
  userName: string;
  role: string;
}

const Member = () => {
  const tableHead = ["번호", "아이디", "이름", "권한", "수정", "삭제"];

  const handleClickDeleteBtn = async (id: string) => {
    if (confirm("삭제하시겠습니까?")) {
      const res = await deleteData("user", "userId", id);
      if (res.isSuccess) {
        alert("삭제되었습니다.");
        const updatedUsers = await getData("user");
        setUsers(updatedUsers.userList);
      } else {
        alert("삭제에 실패했습니다.");
      }
    }
  };
  const router = useRouter();
  const handleClickUpdateBtn = (id: string) => {
    router.push(`/admin/member/${id}`);
  };

  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData("user");
      setUsers(res.userList);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className={styles.title}>회원 목록</div>
      <div className={styles.description}>
        총 <span className={styles.highlight}>{users.length ?? 0}</span>명의
        회원이 있습니다.
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
          {users.map((data, idx) => (
            <tr key={data.userId}>
              <td className={styles.tableElement}>{idx + 1}</td>
              <td className={styles.tableElement}>{data.email}</td>
              <td className={styles.tableElement}>{data.userName}</td>
              <td className={styles.tableElement}>{data.role}</td>
              <td className={styles.tableElement}>
                <button
                  className={`${styles.button} ${styles.updateBtn}`}
                  onClick={() => handleClickUpdateBtn(data.userId)}
                >
                  수정
                </button>
              </td>
              <td className={styles.tableElement}>
                <button
                  className={`${styles.button} ${styles.deleteBtn}`}
                  onClick={() => handleClickDeleteBtn(data.userId)}
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
