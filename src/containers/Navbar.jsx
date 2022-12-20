
import { useState } from "react";
import { NavLinks } from "../constants";
import { Logo } from "../assets";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Button } from "../components";

const Navbar = () => {
  const [active, setActive] = useState('Explore');
  const [toggle, setToggle] = useState(true);

  return (
    <nav className="flex justify-between items-center py-5">
      <img className="md:w-[66px] w-[48px] md:h-[66px] h-[48px]"
        src={Logo}
        alt="logo"/>
      <div className="md:flex hidden justify-between items-center">
        <ul className="list-none flex justify-center items-center flex-1">
          {NavLinks.map((link,index) => (
            <li className={`text-[18px] ${active === link.id ? 'text-yellow border-[1px] border-b-yellow' : 'text-white'} mx-[2rem] py-[.4rem] px-2 border-transparent`}
              key={link.id}
              onClick={() => setActive(link.id)}>
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex hidden justify-start items-center">
        <Button title='Connect Wallet'/>
      </div>

      <div className="md:hidden flex justify-start items-center">
        {toggle ? <HiMenuAlt3 className="w-[32px] h-[32px] text-yellow object-contain"
          onClick={() => setToggle(!toggle)}/> : <AiOutlineCloseCircle className="w-[32px] h-[32px] text-yellow object-contain"
          onClick={() => setToggle(!toggle)}/> }
        <div className={`${toggle ? 'hidden' : 'flex' } p-4 bg-black absolute top-14 right-10 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-center items-start flex-1">
            {NavLinks.map((link,index) => (
              <li className={`text-[18px] ${active === link.id ? 'text-yellow' : 'text-white'} mx-[2rem]`}
                key={link.id}
                onClick={() => (setActive(link.id), setToggle(!toggle))}>
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar