import style from "./style.module.css";
import Place_Button from "./place_button";

export default function Place() {
  return (
    <div className={style.wrapper}>
      <h1>드실 장소를 선택해주세요.</h1>
      <div className={style.button_wrapper}>
        <Place_Button place="매장" />
        <Place_Button place="테이크아웃" />
      </div>
    </div>
  );
}
