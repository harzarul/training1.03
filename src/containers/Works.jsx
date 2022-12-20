
import { work1, work2, work3, work4, workArrow } from "../assets";
import { BsCaretDown } from 'react-icons/bs';

const Works = () => {
  return (
    <section className=' flex md:flex-row flex-col justify-between items-center my-[6rem]'>
      <div className='flex-col items-center justify-center'>
        <div className="flex justify-center items-center w-full mb-2">
          <div className="bg-white rounded-full">
            <img
            src={work1} alt="wallet" />
          </div>
        </div>
        <p className="text-yellow capitalize text-[18px]">
          Set Up Your Wallet
        </p>
      </div>
      <BsCaretDown className="md:hidden flex w-[2rem] h-[2rem] text-purple mb-2"/>
      <img className="md:flex hidden"
      src={workArrow} alt="arrow"/>

      <div className='flex-col items-center justify-center'>
        <div className="flex justify-center items-center w-full mb-2">
          <div className="bg-white rounded-full">
            <img
            src={work1} alt="wallet" />
          </div>
        </div>
        <p className="text-yellow capitalize text-[18px]">
          Create Your Collection
        </p>
      </div>
      <BsCaretDown className="md:hidden flex w-[2rem] h-[2rem] text-purple mb-2"/>
      <img className="md:flex hidden"
      src={workArrow} alt="arrow"/>

      <div className='flex-col items-center justify-center'>
        <div className="flex justify-center items-center w-full mb-2">
          <div className="bg-white rounded-full">
            <img
            src={work1} alt="wallet" />
          </div>
        </div>
        <p className="text-yellow capitalize text-[18px]">
          Add Your NFTs
        </p>
      </div>
      <BsCaretDown className="md:hidden flex w-[2rem] h-[2rem] text-purple mb-2"/>
      <img className="md:flex hidden"
      src={workArrow} alt="arrow"/>

      <div className='flex-col items-center justify-center'>
        <div className="flex justify-center items-center w-full mb-2">
          <div className="bg-white rounded-full">
            <img
            src={work1} alt="wallet" />
          </div>
        </div>
        <p className="text-yellow capitalize text-[18px]">
          List Them For Sale
        </p>
      </div>
    </section>
  )
}

export default Works

