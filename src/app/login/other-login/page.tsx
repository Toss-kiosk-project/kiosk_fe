"use client";
import style from "../../page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../images/logo.png";

export default function OtherLogin() {
  const router = useRouter();
  const handleCancel = () => {
    router.push("/login");
  };
  const handleAdminLogin = () => {
    router.push("/admin");
  };
  return (
    <div className={style.wrapper}>
      <Image src={Logo} alt="logo" width={200} height={200} />
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
          <button className={style.cancel} type="button" onClick={handleCancel}>
            취소
          </button>
          <button className={style.submit} type="button" onClick={handleAdminLogin}>
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}
