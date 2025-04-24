import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl text-gray-800 font-semibold">Luyện tập mọi lúc, mọi nơi</h1>
      <p className="text-gray-500 sm:text-sm">
      Khám phá hàng trăm khoá học từ cơ bản đến nâng cao, được thiết kế để giúp bạn cải thiện sức khoẻ thể chất <br/>và tinh thần, chỉ với vài phút luyện tập mỗi ngày – dù bạn ở đâu, vào bất cứ lúc nào.
      </p>
      <div className="flex items-center font-medium gap-6 mt-4">
        <button className="px-10 py-3 rounded-md text-white bg-pink-600">Bắt đầu ngay</button>
        <button className="flex items-center gap-2">
          Tìm hiểu thêm <img src={assets.arrow_icon} alt="arrow_icon" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
