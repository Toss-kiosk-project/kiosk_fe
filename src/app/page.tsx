"use client";
import style from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };

  return (
    <div>
      <div className={style.wrapper} onClick={handleClick}>
        <p>주문하시려면 터치하세요.</p>
      </div>
    </div>
  );
}
