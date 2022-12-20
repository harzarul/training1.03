import React from 'react'

const CTA = () => {
  return (
    <section className='flex flex-col justify-center items-center my-[2rem]'>
      <h1 className='md:text-[64px] text-[34px] text-white font-semibold mb-[2rem]'>
        Ready For Next NFT Drop?
      </h1>

      <div className='flex md:flex-row flex-col items-center justify-center'>
        <input className='md:mr-7 m-0 py-[.9rem] px-[2rem] bg-dimGray text-white text-[20px] border-solid border-2 border-yellow'
          type="text"
          placeholder='info@gmail.com'/>
        <div className='flex justify-center items-center bg-yellow py-[.6rem] px-[1.2rem] md:m-0 mt-[2rem]'>
          <h1 className='text-black text-[22px] font-bold'>
            Subscribe
          </h1>
        </div>
      </div>
    </section>
  )
}

export default CTA