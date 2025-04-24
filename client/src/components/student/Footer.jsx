import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-pink-100 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-4 md:gap-12 py-10 border-b border-black">
        <div className="flex flex-col md:items-start items-center w-full">
          <img  className='w-20 lg:w-20' src={assets.logo} alt="logo" />
            <p className="mt-2 text-center md:text-left text-sm">
              Nền tảng học trực tuyến giúp bạn rèn luyện sức khoẻ, tinh thần
              thông qua các khoá học Yoga.
            </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold  mb-5">Công Ty</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-black/80 md:space-y-2">
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Về chúng tôi</a></li>
            <li><a href="#">Liên hệ</a></li>
            <li><a href="#">Chính sách</a></li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold mb-5">Đăng ký để nhận thông tin</h2>
          <p className="text-sm text-black/80">Nhận tin tức, bài viết và tài nguyên mới nhất hàng tuần.</p>
          <div className="flex items-center gap-2 pt-4">
            <input type="email" placeholder="Nhập email của bạn"
            className="border border-gray-500/30 bg-pink-150 text-white-500 placeholder-white-500 outline-none w-64 h-9 rounded px-2 text-sm"/>
            <button className="bg-blue-600 w-24 h-9 rounded text-white">Đăng ký</button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm ">Copyright 2025 @ ngbtran. All Right Reserved.</p>
    </footer>
  );
};

export default Footer;
