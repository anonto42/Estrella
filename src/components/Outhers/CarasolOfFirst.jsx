import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const CarasolOfFirst = () => {
    const data = [
        "https://www.aarong.com/media/mageplaza/bannerslider/banner/image/1/-/1-d-post-boishakh-15042024.png",
        "https://www.aarong.com/media/mageplaza/bannerslider/banner/image/5/-/5-d-post-boishakh-15042024.png",
        "https://www.aarong.com/media/mageplaza/bannerslider/banner/image/2/-/2-d-post-boishakh-15042024_1.png"
    ];
    function PlassCount() {
        setBet(bet => (bet === data.length - 1 ? 0 : bet + 1));
    };
    function minusCount() {
        setBet(bet => (bet === 0 ? data.length - 1 : bet - 1));
    };
    const [bet,setBet] = useState(0);

    // setInterval(PlassCount,3000)

    // setTimeout(()=>{
    //     PlassCount();
    // },3000)

    useEffect(() => {
        const intervalId = setInterval(PlassCount, 5000);
    
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
    <div className='absolute w-full h-screen -z-50 -top-10'>
        {/* {data.map((item,index)=><img key={index} className='absolute w-full h-screen' src={item} alt="" />)} */}
        <div className='flex absolute justify-between mt-[40svh] opacity- w-full bg-transparent text-[#ffffff]'>
            <IoIosArrowBack className='z-50 text-[120px] cursor-pointer' onClick={()=>minusCount()}/>
            <IoIosArrowForward className='z-50 text-[120px] cursor-pointer' onClick={()=>PlassCount()}/>
        </div>
        <img className='absolute w-full h-svh scroll-smooth' src={data[bet]} alt="" />
    </div>
  )
}


export default CarasolOfFirst