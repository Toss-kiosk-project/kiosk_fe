"use client";
import { useState } from "react";

export default function Menu() {
  const categories = ["커피", "논커피", "티/에이드", "푸드"];
  const menus = [
    [
      { name: "아메리카노", price: "1600원" },
      { name: "라떼", price: "3000원" },
    ],
    [
      { name: "쿠키", price: "2000원" },
      { name: "샌드위치", price: "3000원" },
    ],
    [
      { name: "말차라떼", price: "2000원" },
      { name: "딸기라떼", price: "3000원" },
    ],
    [
      { name: "캐모마일티", price: "2000원" },
      { name: "밀크티", price: "3000원" },
    ],
  ];

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "20%", borderRight: "1px solid #ccc", padding: "1rem" }}>
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

      <div style={{ width: "80%", padding: "1rem", display: "flex", gap: "2rem" }}>
        {menus[selectedCategoryIndex].map((menu, idx) => (
          <div key={idx} style={{ textAlign: "center" }}>
            <h3>{menu.name}</h3>
            <p>{menu.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
