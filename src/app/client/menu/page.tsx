"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/orderSlice";
import style from "./style.module.css";

interface MenuInterface {
  menuId: string;
  name: string;
  category: string;
  price: number;
  img: string;
}

export default function Menu() {
  const categories = ["커피", "논커피", "티/에이드", "푸드"];
  const [menus, setMenus] = useState<MenuInterface[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("커피");

  useEffect(() => {
    fetch("http://localhost:8080/api/menu/all", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.menuInfo);
        setMenus(res.menuInfo);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const dispatch = useDispatch();
  // 메뉴 클릭 시 Redux에 저장
  const handleMenuClick = (menu: { name: string; price: number }) => {
    dispatch(addItem({ ...menu, quantity: 1 }));
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "25%", borderRight: "1px solid #ccc", padding: "1rem" }}>
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(category)}
            style={{
              cursor: "pointer",
              padding: "0.5rem 0",
              fontWeight: selectedCategory === category ? "bold" : "normal",
            }}
          >
            {category}
          </div>
        ))}
      </div>

      <div className={style.gridContainer}>
        {menus
          .filter((menu) => menu.category === selectedCategory)
          .map((menu, idx) => (
            <div key={idx} className={style.card} onClick={() => handleMenuClick(menu)}>
              <img src={menu.img} alt={menu.name} className={style.cardImage} />
              <h3 className={style.cardTitle}>{menu.name}</h3>
              <p className={style.cardPrice}>{menu.price.toLocaleString()}원</p>
            </div>
          ))}
      </div>
    </div>
  );
}
