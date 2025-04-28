"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/orderSlice";

export default function Menu() {
  const categories = ["커피", "논커피", "티/에이드", "푸드"];
  const menus = [
    [
      { name: "아메리카노", price: 1600 },
      { name: "라떼", price: 3000 },
    ],

    [
      { name: "말차라떼", price: 2000 },
      { name: "딸기라떼", price: 3000 },
    ],
    [
      { name: "캐모마일티", price: 2000 },
      { name: "밀크티", price: 3000 },
    ],
    [
      { name: "쿠키", price: 2000 },
      { name: "샌드위치", price: 3000 },
    ],
  ];

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

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
            onClick={() => setSelectedCategoryIndex(index)}
            style={{
              cursor: "pointer",
              padding: "0.5rem 0",
              fontWeight: selectedCategoryIndex === index ? "bold" : "normal",
            }}
          >
            {category}
          </div>
        ))}
      </div>

      <div style={{ width: "75%", padding: "1rem", display: "flex", gap: "2rem" }}>
        {menus[selectedCategoryIndex].map((menu, idx) => (
          <div key={idx} onClick={() => handleMenuClick(menu)} style={{ textAlign: "center", cursor: "pointer" }}>
            <h3>{menu.name}</h3>
            <p>{menu.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>
    </div>
  );
}
