"use client";
import React, { useEffect, useState } from "react";
import styles from "../../components/component.module.css";
import { useParams, useRouter } from "next/navigation";
import { getDataById, updateProduct } from "../../utils/fetchData";

const UpdateProduct = () => {
  const tableHead: {
    head: string;
    isReadOnly: boolean;
    type: string;
    name: keyof typeof menuData;
  }[] = [
    { head: "이름", isReadOnly: false, type: "text", name: "name" },
    { head: "이미지", isReadOnly: false, type: "text", name: "img" },
    { head: "가격", isReadOnly: false, type: "text", name: "price" },
    { head: "카테고리", isReadOnly: false, type: "text", name: "category" },
  ];
  const router = useRouter();
  const handleClickCancelBtn = () => {
    router.push("/admin");
  };
  const params = useParams();
  const id = params.id as string;
  const [menuData, setMenuData] = useState({
    name: "",
    img: "",
    price: 0,
    category: "",
  });

  const handleClickUpdateBtn = async () => {
    const data = {
      menuId: id,
      name: menuData.name,
      category: menuData.category,
      price: menuData.price,
      img: menuData.img,
    };
    const res = await updateProduct(data);

    if (res.isSuccess) {
      alert(res.message);
      router.push("/admin");
    } else {
      alert("상품수정실패");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDataById("menu", "menuId", id);
      setMenuData(res.menuInfo);
    };
    fetchData();
  }, []);
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
                  value={menuData[head.name]}
                  onChange={(e) =>
                    setMenuData((prev) => ({
                      ...prev,
                      [head.name]: e.target.value,
                    }))
                  }
                />
              </td>
            </tr>
          ))}
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

export default UpdateProduct;
