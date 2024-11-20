import React, { useState } from 'react'



const Trendbar = () => {
  return (
    <>

      <div className={`hidden border-zinc-600 w-1/4 border-l-2 b sm:relative sm:flex scrollbar-thin scrollbar-black flex-col  px-2 py-2 h-screen bg-cgray text-white transition all duration-1000 ease-in-out items-center overflow-y-scroll`}>

        <div className='w-full border-b-2 px-1 py-1 mb-2'>
            <span className='text-xl font-semibold py-1'>Trending</span>
        </div>




        <div className='w-3/4 flex mb-4 hover:big-0 mt-2 flex-col gap-1 h-fit px-1 py-3 bg-lgray rounded-lg'>
            <div className='text-lg font-light px-2 py-1 text-white border-b-2 flex justify-start '>Title</div>

            <div className='w-full mb-2 flex justify-center mt-2 rounded-xl'>
                <img className='w-11/12 object-cover rounded-xl ' src="./images/ramji.png"/>
            </div>


        </div>



        <div className='w-3/4 flex mb-4 hover:big-0 mt-2 flex-col gap-1 h-fit px-1 py-3 bg-lgray rounded-lg'>
            <div className='text-lg font-light px-2 py-1 text-white border-b-2 flex justify-start '>Title</div>

            <div className='w-full mb-2 flex justify-center mt-2 rounded-xl'>
                <img className='w-11/12 object-cover rounded-xl ' src="./images/ramji.png"/>
            </div>


        </div>



        <div className='w-3/4 flex mb-4 hover:big-0 mt-2 flex-col gap-1 h-fit px-1 py-3 bg-lgray rounded-lg'>
            <div className='text-lg font-light px-2 py-1 text-white border-b-2 flex justify-start '>Title</div>

            <div className='w-full mb-2 flex justify-center mt-2 rounded-xl'>
                <img className='w-11/12 object-cover rounded-xl ' src="./images/ramji.png"/>
            </div>


        </div>




        <div className='w-3/4 flex mb-4 hover:big-0 mt-2 flex-col gap-1 h-fit px-1 py-3 bg-lgray rounded-lg'>
            <div className='text-lg font-light px-2 py-1 text-white border-b-2 flex justify-start '>Title</div>

            <div className='w-full mb-2 flex justify-center mt-2 rounded-xl'>
                <img className='w-11/12 object-cover rounded-xl ' src="./images/ramji.png"/>
            </div>


        </div>



        <div className='w-3/4 flex mb-4 hover:big-0 mt-2 flex-col gap-1 h-fit px-1 py-3 bg-slate-600 rounded-lg'>
            <div className='text-lg font-light px-2 py-1 text-white border-b-2 flex justify-start '>Title</div>

            <div className='w-full mb-2 flex justify-center mt-2 rounded-xl'>
                <img className='w-11/12 object-cover rounded-xl ' src="./images/ramji.png"/>
            </div>


        </div>
        
        
        


      </div>



    </>
  )
}

export default Trendbar