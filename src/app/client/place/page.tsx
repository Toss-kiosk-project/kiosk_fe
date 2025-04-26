"use client";
import { useRouter } from "next/navigation";

export default function Place() {
  return (
    <div>
      <h1>드실 장소를 선택해주세요.</h1>
      <div>
        <div>
          <button>매장</button>
        </div>
        <div>
          <button>테이크 아웃</button>
        </div>
      </div>
    </div>
  );
}
