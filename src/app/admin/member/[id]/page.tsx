"use client";
import React, { useEffect, useState } from "react";
import styles from "../../components/component.module.css";
import { useParams, useRouter } from "next/navigation";
import { getDataById, updateUser } from "../../utils/fetchData";

const UpdateMember = () => {
  const tableHead: {
    head: string;
    isReadOnly: boolean;
    type: string;
    name: keyof typeof userData;
  }[] = [
    { head: "이메일", isReadOnly: true, type: "text", name: "email" },
    { head: "이름", isReadOnly: false, type: "text", name: "userName" },
  ];
  const router = useRouter();
  const handleClickCancelBtn = () => {
    router.push("/admin");
  };

  const handleClickUpdateBtn = async () => {
    const data = {
      userId: id,
      userName: userData.userName,
      role: userData.role === "ADMIN" ? 0 : 1,
    };
    const res = await updateUser(data);

    if (res.isSuccess) {
      alert(res.message);
      router.push("/admin");
    } else {
      alert("회원수정실패");
    }
  };

  const params = useParams();
  const id = params.id as string;

  const [userData, setUserData] = useState({
    email: "",
    userName: "",
    role: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDataById("user", "userId", id);
      setUserData(res.userInfo);
    };
    fetchData();
  }, []);
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
                  value={userData[head.name]}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      [head.name]: e.target.value,
                    }))
                  }
                />
              </td>
            </tr>
          ))}
          <tr>
            <th className={styles.tableElement}>권한</th>
            <td className={styles.tableElement}>
              <select
                className={styles.select}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    role: e.target.value,
                  }))
                }
                value={userData.role}
              >
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.buttonWrapper}>
        <button
          className={`${styles.button} ${styles.updateBtn}`}
          onClick={handleClickUpdateBtn}
        >
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
