import style from "./style.module.css";

interface buttonProps {
  place: string;
}

const Place_Button = ({ place }: buttonProps) => {
  return (
    <button type="button" className={style.button}>
      {/* 이미지 */}
      {place}
    </button>
  );
};

export default Place_Button;
