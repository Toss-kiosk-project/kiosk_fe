"use client";
import style from "./style.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Here from "../../images/here.png";
import TakeOut from "../../images/takeout.png";
interface buttonProps {
  place: string;
}

const Place_Button = ({ place }: buttonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/client/payment");
  };

  return (
    <button type="button" onClick={handleClick} className={style.button}>
      {/* 이미지 */}
      <div className={style.image_wrapper}>
        {place === "매장" ? (
          <Image src={Here} alt="here" width={100} />
        ) : (
          <Image src={TakeOut} alt="takeout" width={100} />
        )}
      </div>

      {place}
    </button>
  );
};

export default Place_Button;
