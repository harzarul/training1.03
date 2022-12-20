
import { HeroCard } from '../assets';
import { Button } from '../components'
import { Stats } from '../constants';

const Hero = () => {
  return (
    <section className='my-[2rem] flex md:flex-row flex-col justify-between items-start'>
      <div className='flex-col justify-start items-center'>
        <h1 className='md:text-[85px] text-[42px] text-white font-bold'>
          Explore, Buy and Sell the <br className='md:block hidden'/> <span className='text-yellow'>Best NFTs!</span>
        </h1>
        <div className='flex md:justify-start justify-center items-center my-[2rem]'>
          <div className='md:text-[28px] text-[18px] bg-gray hover:bg-yellow md:w-[257px] w-[155px] md:h-[84px] h-[54px] text-white hover:text-black py-[.7rem] px-[1.3rem] mr-[1.7rem] flex justify-center items-center border-solid border-[2px] border-yellow'>
            Explore
          </div>
          <div className='md:text-[28px] text-[18px] bg-gray hover:bg-yellow md:w-[257px] w-[155px] md:h-[84px] h-[54px] text-white hover:text-black py-[.7rem] px-[1.3rem] flex justify-center items-center border-solid border-[2px] border-yellow'>
            Create
          </div>
        </div>
        <div className='md:flex hidden justify-between items-center'>
          {Stats.map((stat,index) => (
            <div className='flex-col items-center justify-start'
              key={stat.id}>
              <h1 className='text-[62px] text-white'>
                {stat.num}
              </h1>
              <p className='text-24px] text-gray'>
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex-col items-start justify-start relative md:ml-[2rem] ml-0'>
          <div className='absolute top-0 left-6 my-6 mx-6 md:w-3/4 xs:w-1/2 w-3/4'>
            <div className='flex justify-between items-center px-5 py-3 overlay2 rounded-2xl'>
              <div className='flex-col items-start justify-start'>
                <p className='text-white md:text-[18px] text-[16px]'>
                  Current Bid
                </p>
                <h1 className='text-white font-bold md:text-[32px] text-[22px]'>
                  0.99 ETH
                </h1>
              </div>
              <div className='flex-col items-start justify-start'>
                <p className='text-white md:text-[18px] text-[16px]'>
                  End in
                </p>
                <h1 className='text-white font-bold md:text-[32px] text-[22px]'>
                  25 hrs
                </h1>
              </div>
            </div>
          </div>
          <img src={HeroCard} alt="img" />
          <div className='flex justify-between items-center  bg-primary px-6 py-2 rounded-xl'>
            <div className='flex-col items-start justify-start'>
              <p className='md:text-[28px] text-[18px] text-white'>
                Artist
              </p>
              <p className='md:text-[24px] text-[14px] text-gray'>
                @wzard
              </p>
            </div>
            <div className='bg-yellow px-[1.3rem] py-[.4rem] rounded-sm'>
              <h1 className='md:text-[24px] text-[16px] text-black uppercase font-bold'>
                start bid
              </h1>
            </div>
          </div>
      </div>

      <div className='md:hidden flex justify-between items-center w-full my-[2rem]'>
          {Stats.map((stat,index) => (
            <div className='flex-col items-center justify-start'
              key={stat.id}>
              <h1 className='text-[36px] text-white font-bold'>
                {stat.num}
              </h1>
              <p className='text-16px] text-gray'>
                {stat.text}
              </p>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Hero