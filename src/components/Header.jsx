import EllipsisIcon from "../icons/EllipsisIcon";

const Header = () => {
  return (
    <header className="bg-white h-16 max-w-screen border-b sticky top-0 z-10 ">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-36 h-16 p-6">
            <img
              src="https://techit.education/img/techit_logo.svg"
              alt="techit-logo"
            />
          </div>
          <ul className="hidden lg:flex">
            <li className="header_menu">테킷 스쿨</li>
            <li className="header_menu relative">
              <div className="text-white text-[10px] absolute right-2 -top-3 w-4 h-4 flex justify-center items-center rounded-full bg-[#ef4444]">
                N
              </div>
              온보딩 트랙
            </li>
            <li className="header_menu">스타트업 스테이션</li>
            <li className="header_menu border-r-gray-300 border-r-2">이벤트</li>
            <li className="header_menu">기업 해커톤</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className=" header-menu text-techit-gray-200 font-semibold">
            로그인
          </button>
        </div>
        <div className="flex lg:hidden">
          <button className="px-4 rounded-full border h-9 text-sm font-semibold">
            로그인
          </button>

          <EllipsisIcon />
        </div>
      </div>
    </header>
  );
};
export default Header;
