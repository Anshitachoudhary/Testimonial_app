import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import data from '../data';
const Card = (props) => {
    let review = props.review;

    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10] max-auto'>
                <img 
                className='aspect-square rounded-full w-[140px] h-[140px] z-[25]'
                    src={review.image} alt=''/>
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div>
            </div>

            <div className="text-center mt-7">
                <p className='font-bold text-2xl capitalize'>{review.name}</p>
            </div>

            <div className='text-center mt-7'>
                <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft />
            </div>

            <div className='text-center mt-9 text-slate-500'>
                {review.text}
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight />
            </div>
        </div>
    )
}

export default Card
