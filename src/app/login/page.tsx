"use client";
import style from "../page.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleClientLogin = () => {
    router.push("/menu");
  };
  return (
    <div className={style.wrapper}>
      <form className="form-wrapper">
        <label>아이디</label>
        <input type="text" name="username" />
        <br />
        <label>비밀번호</label>
        <input type="password" name="password" />
        <br />
        <button type="button">취소</button>
        <button type="button">로그인</button>
        <button type="button" onClick={handleClientLogin}>
          구글 로그인
        </button>
      </form>
    </div>
  );
}
