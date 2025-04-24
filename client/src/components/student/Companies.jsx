import React from 'react';
import l1 from "../../assets/l1.png"
import l2 from "../../assets/l2.webp"
import l3 from "../../assets/l3.jpg"
import l4 from "../../assets/l4.png"
const Companies = () => {
  return (
    <div className='pt-8'>
        <p className='text-base text-gray-500'>Đơn vị hợp tác</p>
        <div className='flex flex-wrap items-center justify-center gap-6 md:gap-12 md:mt-10 mt-8'>
          <img src={l1} alt="dv1" className='w-32 md:w-48'/>
          <img src={l2} alt="dv2" className='w-32 md:w-48'/>
          <img src={l3} alt="dv3" className='w-32 md:w-48'/>
          <img src={l4} alt="dv4" className='w-32 md:w-48'/>
        </div>
    </div>
  )
}

export default Companies