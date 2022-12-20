
import { creatorsData } from "../constants"

const Creators = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="md:text-[64px] text-[34px] text-white font-semibold my-[1rem]">
        Top Creators
      </h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {creatorsData.map((data, index) => (
          <div className="flex justify-between items-center bg-dimGray w-[20rem] py-[.8rem] px-[1.2rem] rounded-3xl ">
            <div className="flex justify-start items-center">
              <img className="w-[45px] h-[45px] mr-2"
                src={data.icon}
                alt="icon" />
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-[18px] text-white">
                  {data.name}
                </h1>
                <p className="text-[16px] text-gray">
                  {data.eth} ETH
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-solid border-l-2 border-red-700 px-2">
              <h1 className="text-[18px] text-white">
                {data.num}
              </h1>
              <p className="text-[16px] text-gray">
                Items
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center border-solid border-2 border-yellow py-[.6rem] px-[1.8rem] my-[2rem]">
          <h1 className="text-[22px] text-white">
            View All
          </h1>
      </div>
    </section>
  )
}

export default Creators