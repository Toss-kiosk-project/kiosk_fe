"use client";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "./images/logo.png";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };

  return (
    <div>
      <div className={style.wrapper} onClick={handleClick}>
        <Image src={Logo} alt="logo" width={200} height={200} />
        <br />
        <br />
        <p>시작하려면 터치하세요.</p>
      </div>
    </div>
  );
}
