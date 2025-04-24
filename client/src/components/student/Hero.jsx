import React from 'react'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-pink-200 to-white'>
        <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Yoga không chỉ là những động tác mà là hành trình trở về với <span className='text-pink-600'>sự tĩnh lặng trong tâm hồn.</span></h1>
        
        <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Chúng tôi mang đến trải nghiệm yoga toàn diện giúp bạn nuôi dưỡng sự cân bằng từ bên trong,xoa dịu những căng thẳng trong tâm trí và khơi dậy nguồn năng lượng tích cực mỗi ngày,
          để bạn sống chậm lại, lắng nghe bản thân và kết nối sâu sắc với chính mình.</p>

        <SearchBar />
    </div>
  )
}

export default Hero