import React from 'react'
import { Brokers } from '../constants'

const Broker = () => {
  return (
    <section className='flex md:flex-row flex-col justify-between items-center my-[5rem]'>
      {Brokers.map((broker, index) => (
        <img className='my-[1rem]'
          src={broker.img}
          alt="image"
          key={broker.id} />
      ))}
    </section>
  )
}

export default Broker