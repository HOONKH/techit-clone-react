import { useEffect, useState } from "react";
import CloseIcon from "../icons/CloseIcon";

const TopBanner = () => {
  const [isClose, setIsClose] = useState(false);
  const onClickClose = () => {
    setIsClose(true);

    localStorage.setItem("topBannerClose", "true");
  };

  useEffect(() => {
    if (localStorage.getItem("topBannerClose") === "true") {
      setIsClose(true);
    }
  }, []);
  return (
    <div className={`h-[42px] bg-purple-100 ${isClose && "hidden"}`}>
      <div className="max-w-screen-xl flex justify-between mx-auto px-6">
        <div className="items-center flex">
          <span className=" font-semibold flex items-center text-[15px]">
            앱 스쿨 사전설명회로 궁금증 해결하기
            <img className="w-[52px]" src="./images/top_banner.webp" alt="" />
          </span>
        </div>
        <button className="w-5 " onClick={onClickClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};
export default TopBanner;
