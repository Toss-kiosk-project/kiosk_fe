"use client";
import style from "../page.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleClientLogin = () => {
    router.push("/client/place");
  };
  return (
    <div className={style.wrapper}>
      <form>
        <div className={style.form_wrapper}>
          <div>
            <label>아이디</label>
            <input className={style.input} type="text" name="username" />
          </div>
          <div>
            <label>비밀번호</label>
            <input className={style.input} type="password" name="password" />
          </div>
        </div>
        <div className={style.button_wrapper}>
          <button className={style.cancel} type="button">
            취소
          </button>
          <button className={style.submit} type="button">
            로그인
          </button>
        </div>
        <button className={style.google} type="button" onClick={handleClientLogin}>
          구글 로그인
        </button>
      </form>
    </div>
  );
}
