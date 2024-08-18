import React from 'react'
import "./Hero.css"
import hero from "../../assets/image 34.png"
const Hero = () => {
    return (
        <div className='hero'>
            <div className='container mx-auto mt-6'>
                <div className="hero__wrapper flex gap-4 box ">
                    <div className="hero__box  border p-14 shadow-xl flex flex-col gap-7 hero">
                        <p className='max-w-80 font-bold text-5xl'>Мебель на любой вкус!</p>
                        <div className="flex flex-col">
                            <p className='desc'>Худи, чашки для горячего чая и термосы</p>
                            <p className='desc'>Начало списка вещей, которые можно</p>
                            <p className='desc'>Eлочные игрушки, брелочки</p>
                        </div>
                        <button className=' w-full border-none bg-orange-400 py-2 rounded-full text-fuchsia-50 font-medium'>Перейти в каталог</button>
                        <button className=' w-full border py-2 rounded-full text-orange-400 font-medium mt-3'>Перейти в каталог</button>
                    </div>
                    <div className='hero__img'>
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero