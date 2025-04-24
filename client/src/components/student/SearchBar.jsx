import React, { useState } from "react";
import search_icon from "../../assets/search_icon.png";
import { data, useNavigate } from "react-router-dom";

const SearchBar = ({data}) => {
  
  const navigate = useNavigate()
  const [input,setInput] = useState(data ? data : '')
  const onSearchHandler = (e) =>{
    e.preventDefault()
    navigate('/course-list/' + input)
  }

  return (
    <form onSubmit={onSearchHandler} className="max-w-xl w-full h-12 md:h-14 flex items-center bg-white border border-gray-500/20 rounded overflow-hidden shadow-sm">
      <div className="h-full flex items-center pl-3 pr-2">
        <img
          src={search_icon}
          alt="search"
          className="w-5 h-5 object-contain opacity-70"
        />
      </div>
      <input
      onChange={e => setInput(e.target.value)} value={input}
        type="text"
        placeholder="Tìm kiếm khoá học"
        className="w-full h-full outline-none text-gray-500/80 text-sm px-2"
      />
      <button
        type="submit"
        className="bg-pink-600 hover:bg-pink-700 transition-colors duration-200 text-white px-5 md:px-8 h-full text-sm font-medium rounded-r"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
