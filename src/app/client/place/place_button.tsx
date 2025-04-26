"use client";
import style from "./style.module.css";
import { useRouter } from "next/navigation";
interface buttonProps {
  place: string;
}

const Place_Button = ({ place }: buttonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/client/menu");
  };

  return (
    <button type="button" onClick={handleClick} className={style.button}>
      {/* 이미지 */}
      {place}
    </button>
  );
};

export default Place_Button;
