"use client";
import style from "../page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../images/logo.png";
import Google from "../images/google.png";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const handleClientLogin = () => {
    signIn("google", { callbackUrl: "/client/menu" });
    // router.push("/client/menu");
  };
  const handleOtherLogin = () => {
    router.push("/login/other-login");
  };
  return (
    <div className={style.wrapper}>
      <Image src={Logo} alt="logo" width={200} height={200} />

      <button className={style.big_button} type="button" onClick={handleClientLogin}>
        <Image src={Google} alt="google" width={20} height={20} />
        <p style={{ marginLeft: "5px", fontWeight: "bold" }}>구글 로그인</p>
      </button>
      <button
        className={style.big_button}
        type="button"
        onClick={handleOtherLogin}
        style={{ backgroundColor: "#e1cbbc" }}
      >
        다른 방법으로 로그인
      </button>
    </div>
  );
}
