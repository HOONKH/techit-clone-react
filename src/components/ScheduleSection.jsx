import { useState } from "react";
import TitleBar from "./TitleBar";
import ScheduleMonth from "./ScheduleMonth";
import ScheduleClass from "./ScheduleClass";

const ScheduleSection = () => {
  const [isClass, setIsClass] = useState(true);

  const onClickClass = () => {
    setIsClass(true);
  };
  const onClickCMonth = () => {
    setIsClass(false);
  };

  return (
    <section className="mt-20 bg-gray-100 max-w-screen-xl mx-auto px-6">
      <TitleBar
        title="테킷 스쿨 일정 확인하기"
        desc="한 눈에 보는 테킷 스쿨 오픈 일정"
      />

      <div className="">
        <div className="pt-10 flex text-xl border-b">
          <button
            className={`mr-6 pb-2  ${
              isClass &&
              "text-techit-main font-semibold border-b-2 border-techit-main"
            }`}
            onClick={onClickClass}
          >
            클래스별
          </button>
          <button
            onClick={onClickCMonth}
            className={`pb-2 text-techit-gray-200  ${
              !isClass &&
              "text-techit-main font-semibold border-b-2 border-techit-main"
            }`}
          >
            월별로 보기
          </button>
        </div>
        <div className="mt-6">
          {isClass ? <ScheduleClass /> : <ScheduleMonth />}
        </div>
      </div>
    </section>
  );
};
export default ScheduleSection;
