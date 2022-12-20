
import {footerLogo} from '../assets';
import {Logo} from '../assets'
import { AiFillYoutube, AiOutlineTwitter, AiOutlineGooglePlus } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { footerAbout, footerSupport } from '../constants';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center mt-[2rem]'>
      <div className='flex md:flex-row flex-col justify-between md:items-start items-center'>
        <div className='flex md:flex-row flex-col justify-start items-center'>
          <img src={footerLogo} alt="logo" />
          <div className='flex flex-col justify-start items-start w-1/2 md:m-0 my-6'>
            <p className='text-[19px] mb-[1rem]'>
              Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est. 
            </p>
            <div className='md:flex hidden justify-between items-center text-[2.3rem]'>
              <AiFillYoutube className='mr-3 hover:text-red-700'/>
              <AiOutlineTwitter className='mr-3 hover:text-blue-300'/>
              <FaFacebookF className='mr-3 hover:text-blue-700'/>
              <AiOutlineGooglePlus className='mr-3 hover:text-green-700'/>
            </div>
          </div>
        </div>
        <div className='flex justify-around items-start'>
            {footerAbout.map((data,index) => (
              <div className='flex flex-col items-start justify-start mr-[3rem]'
                key={data.id}>
                <h1 className='text-[22px] text-white font-bold mb-[1rem]'>
                  {data.title}
                </h1>
                <p className='text-[18px] text-gray hover:text-purple cursor-pointer'>
                  {data.link1}
                </p>
                <p className='text-[18px] text-gray hover:text-purple cursor-pointer'>
                  {data.link2}
                </p>
                <p className='text-[18px] text-gray hover:text-purple cursor-pointer'>
                  {data.link3}
                </p>
                <p className='text-[18px] text-gray hover:text-purple cursor-pointer'>
                  {data.link4}
                </p>
              </div>
            ))}
           {footerSupport.map((data,index) => (
              <div className='flex flex-col items-start justify-start md:mr-[3rem] mr-0'
                key={data.id}>
                <h1 className='text-[22px] text-white font-bold mb-[1rem]'>
                  {data.title}
                </h1>
                <p className='text-[18px] text-gray hover:text-purple cursor-pointer'>
                  {data.link1}
                </p>
                <p className='text-[18px] text-gray hover:text-purple cursor-pointer'>
                  {data.link2}
                </p>
                <p className='text-[18px] text-gray hover:text-purple cursor-pointer'>
                  {data.link3}
                </p>
                <p className='text-[18px] text-gray hover:text-purple cursor-pointer'>
                  {data.link4}
                </p>
              </div>
            ))}
        </div>
        <div className='md:hidden flex justify-between items-center text-[2.3rem] my-[.7rem]'>
              <AiFillYoutube className='mr-3 hover:text-red-700'/>
              <AiOutlineTwitter className='mr-3 hover:text-blue-300'/>
              <FaFacebookF className='mr-3 hover:text-blue-700'/>
              <AiOutlineGooglePlus className='mr-3 hover:text-green-700'/>
            </div>
      </div>

      <div className='w-full flex justify-center items-center my-[.8rem]'>
        <h1 className='text-[18px] text-white font-bold'>
          All rights reserved@2021
        </h1>
      </div>
    </footer>
  )
}

export default Footer