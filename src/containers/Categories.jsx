

import { Cates } from '../constants';
import { BiLike } from 'react-icons/bi';

const Categories = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <div>
        <h1 className='md:text-[64px] text-[34px] text-white font-semibold'>
          Explore By Categories
        </h1>
      </div>

      <div className='flex md:flex-row flex-col justify-between items-center'>
        {Cates.map((data,index) => (
          <div className='flex flex-col items-center justify-center bg-dimGray p-4 rounded-xl mx-2 mt-[2rem]'>
            <img
              src={data.img}
              alt="image"
              key={data.id}/>
            <div className='flex justify-between items-center w-full my-4'>
              <div className='flex justify-start items-start'>
                <img className='w-[38px] h-[38px]'
                  src={data.icon}
                  alt="icon" />
                <div className='flex flex-col justify-start items-start ml-2'>
                  <h1 className='text-[18px] text-white'>
                    {data.name}
                  </h1>
                  <p className='text-[14px] text-gray'>
                    {data.by}
                  </p>
                </div>
              </div>
              <div className='flex justify-start items-center'>
                <BiLike className='text-[14px] text-red mr-2'/>
                <p className='text-[16px] text-white'>
                  {data.like}
                </p>
              </div>
            </div>
            <div className='flex justify-between items-center w-full'>
              <p className='text-[18px] text-gray'>
                Current Bid :
              </p>
              <h1 className='text-[18px] text-white font-bold'>
                {data.bid}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories