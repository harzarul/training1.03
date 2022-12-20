import React from 'react'

const button = ({title,style}) => {
  return (
    <button className={`${style} flex justify-center items-center rounded-full button__bg font-sans text-yellow border-solid hover:border-[1px] border-yellow`}>
        {title}
    </button>
  )
}

export default button