import React from 'react'
import "remixicon/fonts/remixicon.css";
import Main from './Main';
import  Sidebar  from './Sidebar';
import Trendbar from './Trendbar';

const Section01 = () => {
    
  return (<>

  {/* mobile  design */}
  <section className='sm:hidden'>
    <section className='w-full h-[70vh]  text-white justify-center flex flex-col items-center'>


{/* glassmorphism */}

    <div className='flex flex-col items-center justify-start'>


    <div className='w-5/6 h-[60vh] rounded-lg fixed -z-10 backdrop-blur-md bg-black opacity-45 brightness-50'></div>

    <div className='flex px-4  w-4/5  justify-between items-center border-2 border-red-700'>
        <div className=' px-2 py-3 text-lg font-bold'>CUTE RAM LALA </div>
        <div>
            <span  className='text-2xl' ><i class="ri-download-2-line"></i> </span>
            <span className='text-2xl' > <i class="ri-share-box-line"></i> </span>
        </div>
    </div>
        <div className=' w-5/6 h-fit relative z-0 rounded-2xl  '>

            <div className='w-full px-3 border my-2 rounded-2xl  border-red-800 flex justify-center'>

                <img className='w-full rounded-2xl object-cover ' src="./images/ramji.png"/>

            </div>

            <div className='mb-2 flex justify-between items-center text-base font-medium px-2 '> 
                <div className='px-3 py-2 flex gap-3 items-center'>
                    <span className='text-blue-500'>Likes </span>
                    <span className='border-2 px-1 py-1 text-sm rounded-md'>PREVIEW</span>
                </div>

                <div className='bg-blue-600 border-2 border-blue-600 px-2 py-1 rounded-md'>Download</div>

            </div>
            
        </div>



    {/* prompt box  */}

        <div>

        </div></div>
    </section>
        <div className=' w-screen fixed bottom-0 flex justify-center ' ><form className='w-11/12 rounded-lg bg-slate-600 border flex flex-col gap-2'>
            <div className='  flex justify-between gap-4  border-red-800 px-2 py-3  '>
                {/* <span></span> */}
                
                    
                <input className='outline-none rounded-lg w-5/6 ' type="text" placeholder='Enter the Prompt '/>
                {/* <input className='bg-blue-600' type="Submit" vlaue="Create it" /> */}
                <a><img className='w-9' src='./images/search.png'/></a>
            </div>

            </form>
        </div>

    </section>


    {/* for laptop view  */}

    <section className='hidden relative bg-cgray w-full  sm:flex'>
    <Sidebar/>
    <Main/>
    <Trendbar/>
    </section>



  </>)
}

export default Section01