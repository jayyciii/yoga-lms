import React, { useContext } from 'react'
import logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.png'
import { Link, useLocation } from 'react-router-dom';
import { useClerk,UserButton,useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {

  const {navigate, isEducator} = useContext(AppContext)
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');

  const {openSignIn} = useClerk()
  const {user} = useUser()



  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b-2 ${isCourseListPage ? 'bg-white' : 'bg-pink-200'} border-black-200`}>
      
   
      <img onClick={() => navigate('/')} src={logo} alt='Logo' className='w-20 lg:w-28 cursor-pointer' />

     
      <div className='hidden md:flex items-center gap-8 text-gray-700 font-medium'>
        { user && 
        <>
        <button onClick={()=> {navigate('/educator')}}>{isEducator ? 'Dashboard' : 'Luyện tập'}</button>
        <div className='h-4 w-px bg-gray-600'></div>
        <Link to='/my-enrollments' className='hover:text-pink-600 transition'>Khoá học</Link>
        </>
        } 
        
        {user ? <UserButton/> : 
        <button onClick={() => openSignIn()}className='bg-pink-600 hover:bg-pink-700 transition text-white px-5 py-2 rounded-full'>
          Đăng ký
        </button>
        }
      </div>


      {/* mobile */}
      <div className='md:hidden flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
      { user && 
        <>
        <button onClick={()=> {navigate('/educator')}}>{isEducator ? 'Dashboard' : 'Luyện tập'}</button>
        <div className='h-4 w-px bg-gray-600'></div>
        <Link to='/my-enrollments' className='hover:text-pink-600 transition'>Khoá học</Link>
        </>
        } 
        </div>
        {
          user ? <UserButton /> : 
          <button onClick={() => openSignIn()}>
          <img src={user_icon} alt='User' className='w-8 h-8 object-cover rounded-full' />
        </button>
        }
        
      </div>
    </div>
  )
}

export default Navbar;
