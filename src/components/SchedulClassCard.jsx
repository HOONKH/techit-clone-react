const ScheduleClassCard = ({ title, desc, image, bgColor }) => {
  return (
    <>
      <div
        className={`rounded-t-xl ${bgColor} flex py-4 px-6 justify-between items-center `}
      >
        <div>
          <h3 className="font-semibold text-xl">{title}</h3>
          <h5 className="text-techit-gray-200">{desc}</h5>
        </div>
        <div className="w-[126px] object-cover">
          <img src={`./images/${image}`} alt="kdt" />
        </div>
      </div>
      <div className="py-3 px-6 flex justify-between border-b">
        <div className="font-semibold">10기 - 24년 04월 오픈</div>
        <div className="text-techit-gray-200">모집예정</div>
      </div>
      <div className="py-3 px-6 flex justify-between border-b">
        <div className="font-semibold">11기 - 24년 04월 오픈</div>
        <div className="text-techit-gray-200">모집예정</div>
      </div>
    </>
  );
};
export default ScheduleClassCard;
