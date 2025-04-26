"use client";
import style from "../page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../images/logo.png";

export default function Login() {
  const router = useRouter();
  const handleClientLogin = () => {
    router.push("/client/menu");
  };
  const handleOtherLogin = () => {
    router.push("/login/other-login");
  };
  return (
    <div className={style.wrapper}>
      <Image src={Logo} alt="logo" width={200} height={200} />

      <button className={style.big_button} type="button" onClick={handleClientLogin}>
        구글 로그인
      </button>
      <button className={style.big_button} type="button" onClick={handleOtherLogin}>
        다른 방법으로 로그인
      </button>
    </div>
  );
}
