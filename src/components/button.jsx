import React from 'react'

const button = ({title}) => {
  return (
    <button className='flex justify-center items-center py-[.7rem] px-[1.2rem] rounded-full button__bg text-yellow border-solid hover:border-[1px] border-yellow'>
        {title}
    </button>
  )
}

export default button