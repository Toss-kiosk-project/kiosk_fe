"use client";
import React, { useState } from "react";
import styles from "../../components/component.module.css";
import { useRouter } from "next/navigation";
import { addProduct } from "../../utils/fetchData";

const AddProduct = () => {
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

  const [menuData, setMenuData] = useState({
    name: "",
    img: "",
    price: 0,
    category: "",
  });

  const handleClickAddBtn = async () => {
    const data = {
      name: menuData.name,
      category: menuData.category,
      price: menuData.price,
      img: menuData.img,
    };

    const res = await addProduct(data);
    if (res.isSuccess) {
      alert(res.message);
      router.push("/admin");
    } else {
      alert("상품 추가 실패");
    }
  };

  return (
    <div>
      <div className={styles.title}>상품 추가</div>
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
          onClick={handleClickAddBtn}
        >
          추가하기
        </button>
        <button
          className={`${styles.button} ${styles.deleteBtn}`}
          onClick={handleClickCancelBtn}
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
