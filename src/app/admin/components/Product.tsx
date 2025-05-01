"use client";

import React, { useEffect, useState } from "react";
import styles from "./component.module.css";
import { useRouter } from "next/navigation";
import { deleteData, getData } from "../utils/fetchData";
import Image from "next/image";

interface ProductData {
  menuId: string;
  name: string;
  img: string;
  category: string;
  price: number;
}

const Product = () => {
  const tableHead = [
    "번호",
    "이름",
    "이미지",
    "총가격",
    "카테고리",
    "수정",
    "삭제",
  ];

  const handleClickDeleteBtn = async (id: string) => {
    console.log(id);
    if (confirm("삭제하시겠습니까?")) {
      const res = await deleteData("menu", "menuId", id);
      if (res.isSuccess) {
        alert("삭제되었습니다.");
        const updatedUsers = await getData("menu");
        setMenus(updatedUsers.userList);
      } else {
        alert("삭제에 실패했습니다.");
      }
    }
  };
  const router = useRouter();
  const handleClickUpdateBtn = (id: string) => {
    router.push(`/admin/product/${id}`);
  };

  const [menus, setMenus] = useState<ProductData[]>([]);
  const handleClickAddBtn = () => {
    router.push("/admin/product/add");
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData("menu");
      setMenus(res.menuInfo);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className={styles.title}>상품 목록</div>
      <div className={`${styles.description} ${styles.flex}`}>
        <div>
          총 <span className={styles.highlight}>{menus.length ?? 0}</span>개의
          상품이 있습니다.
        </div>
        <button
          className={`${styles.button} ${styles.addBtn}`}
          onClick={handleClickAddBtn}
        >
          상품 추가
        </button>
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
          {menus.map((data, idx) => (
            <tr key={data.menuId}>
              <td className={styles.tableElement}>{idx + 1}</td>
              <td className={styles.tableElement}>{data.name}</td>
              <td>
                <img src={data.img} width={100} alt={data.name} />
              </td>
              <td className={styles.tableElement}>{data.price}</td>
              <td className={styles.tableElement}>{data.category}</td>
              <td className={styles.tableElement}>
                <button
                  className={`${styles.button} ${styles.updateBtn}`}
                  onClick={() => handleClickUpdateBtn(data.menuId)}
                >
                  수정
                </button>
              </td>
              <td className={styles.tableElement}>
                <button
                  className={`${styles.button} ${styles.deleteBtn}`}
                  onClick={() => handleClickDeleteBtn(data.menuId)}
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
