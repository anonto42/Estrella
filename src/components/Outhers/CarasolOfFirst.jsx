import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const CarasolOfFirst = () => {
    const data = [
        "https://www.aarong.com/media/mageplaza/bannerslider/banner/image/1/-/1-d-post-boishakh-15042024.png",
        "https://www.aarong.com/media/mageplaza/bannerslider/banner/image/5/-/5-d-post-boishakh-15042024.png",
        "https://www.aarong.com/media/mageplaza/bannerslider/banner/image/2/-/2-d-post-boishakh-15042024_1.png"
    ];
    function PlassCount(params) {
        if(bet == (data.length - 1)){
            setBet(0);
        }else{
            setBet(bet + 1);
        }
    };
    function minusCount(params) {
        if(bet == 0){
            setBet(data.length -1);
        }else{
            setBet(bet - 1);
        }
    };
    const [bet,setBet] = useState(0);
    return (
    <div className='absolute w-full h-screen -z-50 -top-10'>
        {/* {data.map((item,index)=><img key={index} className='absolute w-full h-screen' src={item} alt="" />)} */}
        <div className='flex absolute justify-between mt-[40svh] opacity- w-full bg-transparent text-[#e6d1fd]'>
            <IoIosArrowBack className='z-50 text-[120px] cursor-pointer' onClick={()=>minusCount()}/>
            <IoIosArrowForward className='z-50 text-[120px] cursor-pointer' onClick={()=>PlassCount()}/>
        </div>
        <img className='absolute w-full h-svh scroll-smooth' src={data[bet]} alt="" />
    </div>
  )
}


export default CarasolOfFirst