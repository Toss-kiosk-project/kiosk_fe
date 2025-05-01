"use client";
import React, { useRef } from "react";
import styles from "./login.module.css";
import { login } from "../utils/fetchData";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleClickLoginBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    const res = await login({ email, password });

    if (res.isSuccess && res.userInfo.role === "ADMIN") {
      alert("로그인 성공");
      localStorage.setItem("isAdmin", "true");
      router.push("/admin");
    } else {
      alert("로그인 실패");
      localStorage.removeItem("isAdmin");

      if (emailRef.current) emailRef.current.value = "";
      if (passwordRef.current) passwordRef.current.value = "";
    }
  };

  return (
    <>
      <h1 className={styles.title}>관리자 로그인</h1>
      <form onSubmit={handleClickLoginBtn}>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            이메일
          </label>
          <input
            type="text"
            id="email"
            name="email"
            ref={emailRef}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            로그인
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
