import style from "./style.module.css";
import Image from "next/image";
import Logo from "../../images/logo.png";

const Menu_Header = () => {
  return (
    <div className={style.header_wrapper}>
      <div className={style.header_logo}>
        <Image src={Logo} alt="logo" height={70} />
      </div>
      <div className={style.header_sub}>
        <div>메뉴 선택</div>
        <button type="button" className={style.header_button}>
          이전
        </button>
      </div>
    </div>
  );
};

export default Menu_Header;
