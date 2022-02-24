import { FC } from 'react';
import useLang from '../../lib/locales';
import Hamburger from './Hamburger';
import Logo_img from './Logo_img';
import Logo_Text from './Logo_Text';

const NavBar: FC = () => {
  const { get } = useLang();
  const items: string[] = get('shared.navbar.items');

  return (
    <nav
      id="NavBar"
      className="container mx-auto w-full font-_Poppins font-bold flex items-center mt-6 sm:mt-12 justify-between"
    >
      <div className="flex space-x-5 items-center">
        {/* <div className="h-6 w-6 rounded-full bg-indigo-500" /> */}
        <Logo_img className="h-8 fill-indigo-600" />
        <Logo_Text className="h-8 fill-indigo-600" />
      </div>

      <ul className="pt-3 hidden sm:flex justify-end items-center space-x-5 text-indigo-400 uppercase text-xs lg:text-sm">
        {items &&
          items.map((item, key) => (
            <li className="cursor-pointer" key={key}>
              {item}
            </li>
          ))}
        {/* <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Prix</li>
        <li className="cursor-pointer">Contact</li> */}
        <li>
          <button className="bg-red-500 text-white rounded px-3 py-1 uppercase">
            Login
          </button>
        </li>
      </ul>
      <div className="flex sm:hidden justify-end pt-1">
        <Hamburger className="h-10 w-10 stroke-red-600 cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavBar;
