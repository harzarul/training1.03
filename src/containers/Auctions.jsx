
import { AuctionData } from '../constants';
import { FcLike } from 'react-icons/fc';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Auctions = () => {
  return (
    <section className='flex-row justify-center items-start'>
      <div className='flex justify-center items-center '>
        <h1 className='sm:text-[64px] text-[36px] text-white capitalize font-semibold'>
          Live Auctions
        </h1>
      </div>

      <Swiper className='flex justify-between items-center flex-1'
        breakpoints={{
          1060: {
            width: 1060,
            slidesPerView: 3,
          },
          1: {
            width: 1000,
            slidesPerView: 2,
          }
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}>
        {AuctionData.map((data,index) => (
          <SwiperSlide className='flex-col items-center justify-start bg-dimGray p-3 mx-1 rounded-md'
            key={data.id}>
            <img className=''
              src={data.img}
              alt="image" />
            <div className='flex justify-between items-center my-2'>
              <div className='flex justify-start items-center'>
                <img className='w-[40px] h-[40px]'
                  src={data.icon}
                  alt="icon" />
                <div className='flex-col items-start justify-start'>
                  <h1 className='text-[16px] text-white'>
                    {data.name}
                  </h1>
                  <p className='text-[14px] text-gray'>
                    {data.by}
                  </p>
                </div>
              </div>
              <div className='flex justify-center items-center text-[20px]'>
                <FcLike className='text-red mr-1'/> {data.love}
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-[18px] text-gray'>
                Current Bid
              </p>
              <p className='text-white text-[18px] font-bold'>
                {data.bid}
              </p>
            </div>
            <div className='flex justify-center items-center py-[.7rem] w-full bg-yellow my-4'>
              <h1 className='text-[22px] text-black'>
                Place a Bid
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Auctions