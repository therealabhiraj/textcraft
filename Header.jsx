import React, { useState, useEffect, useRef } from 'react';

const Header = () => {

    const [isSlide , setSlide]=useState(false)
    const [isSlide2 , setSlide2]=useState(false)



    // logic is uses 2 clickanywhere

    const sidebarRef = useRef(null);
    const profilePanelRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {


            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {

                setSlide(false); 

            }
            if (profilePanelRef.current && !profilePanelRef.current.contains(event.target)) {
                setSlide2(false); 
            }
        };

        // Add event listener to the document
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Cleanup listener on component unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    
  return (
    <>
    
    <nav className=''>
        <div className='w-full sm:bg-cgray border-b-2 border-zinc-600 text-white flex justify-between relative px-1 py-1 h-fit items-center'>

                <div className='flex gap-2   '>

                        <a onClick={()=>{setSlide(true)}} ><img className='w-7 sm:hidden'  src='./images/image.png'/></a>
                        {/* <a ><img className=' hidden sm:block w-10 '  src='./images/logo.png'/></a> */}
                        <div className='font-extrabold text-md  sm:text-3xl'>TEXTCRAFT</div>
                    
                </div>

                <div>

                    <div><img onClick={()=>{setSlide2(true)}} className='w-12 sm:hover:scale-125 transitioin all duration-1000 ease-in-out sm:w-14' src='./images/profile.png'/></div>

                    {/* profile bar */}


                    <div ref={profilePanelRef} className={`
                    px-1 z-10
                        w-2/5 sm:w-2/12 top-0  ${isSlide2?"translate-x-0":"translate-x-full"} right-0 fixed h-1/4 sm:h-1/3 bg-zinc-900`}>
                        <div className='text-base px-1 mt-1 border-b-2 border-zinc-600'>
                            <div className='flex  items-center justify-between px-1'><span className='text-base font-light sm:text-xl sm:font-semibold sm:cursor-pointer sm:px-2 sm:hover:scale-105 sm:transition all duration-1000 ease-in-out'>@UserName</span><img className="w-8 sm:cursor-pointer sm:w-12  sm:hover:scale-110 sm:mr-2 sm:transition all duration-1000 ease-in-out" src='./images/profile.png'/></div>
                            <div className='sm:text-lg sm:font-medium sm:px-2'>EMAIL@gmail.com</div>
                        </div>

                        <div className='border-b-2 mt-2 sm:text-lg sm:cursor-pointer sm:font-medium py-1 px-1 border-zinc-600'>
                            <div className='sm:px-2 sm:hover:scale-105 sm:transition all duration-1000 ease-in-out'>My Profile</div>
                            <div className='sm:px-2 sm:hover:scale-105 sm:transition all duration-1000 ease-in-out'><img src=''/><span>@UserName</span></div>
                            <div className='sm:px-2 sm:hover:scale-105 sm:transition all duration-1000 ease-in-out'><img src=''/><span>@UserName</span></div>
                        </div>

                        <div className='mt-2 sm:px-2 sm:hover:scale-105 sm:transition all duration-1000 ease-in-out sm:ml-2  sm:text-lg sm:text-red-600 sm:cursor-pointer sm:font-medium'>
                            <div><button>Sign Out</button></div>
                        </div>




                    </div>

                </div>





    {/* SLIDE BAR */}


                
                    {/* <div className='w-1/3 h-screen bg-slate-400 absolute top-0 left-0'></div> */}
                    <div ref={sidebarRef} className={`sm:hidden w-1/2 px-2 py-2 h-screen bg-slate-400 ${isSlide? "translate-x-0" : "-translate-x-full"} z-10 transition all duration-1000 ease-in-out fixed top-0 left-0`}>
                    <div className='text-md font-bold flex mb-4 justify-between items-center mr-1'><span className='flex items-center justify-center'><img className='w-16' src="./images/logo.png"/></span><a className="text-2xl" onClick={()=>{setSlide(false)}}>X</a></div>

                    <div className='hover:border  text-lg   px-2 py-2 hover:scale-105 hover:border-white '>
                        <a className='flex gap-3 ' >
                            
                            <span>
                                <i class="ri-home-2-fill"></i>
                            </span> Home
                        </a>
                    </div>


                    <div className='hover:border  text-lg  px-2 py-2 hover:scale-105 hover:border-white '>
                        <a className='flex gap-3 ' > <span><i class="ri-search-eye-line"></i></span>Search </a>
                    </div>

                    <div className='hover:border  text-lg  px-2 py-2 hover:scale-105 hover:border-white '><a className='flex gap-3' > <span><i class="ri-account-circle-fill"></i> </span>Profile </a>
                    </div>
                    <div className='hover:border  text-lg  px-2 py-2 hover:scale-105 hover:border-white '><a className='flex gap-3 ' > <span><i class="ri-profile-fill"></i></span>Subscription </a></div>
                    <div className='hover:border text-lg   px-2 py-2 hover:scale-105 hover:border-white '><a className='flex gap-3 ' > <span><i class="ri-logout-circle-line"></i></span> Sign Out</a></div>
                </div>
        </div>









    </nav>
    
    </>
  )
}

export default Header