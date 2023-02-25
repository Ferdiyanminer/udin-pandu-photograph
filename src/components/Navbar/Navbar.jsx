import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="flex py-2 items-center justify-between px-4 text-yellow-600 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <a href="#" className="font-medium mr-6 hover:text-white">
        Udin Photograph
      </a>

      <ul className="hidden   md:flex justify-center gap-8 ">
        <li className="text-white font-semibold hover:text-yellow-500">
          <a href="#home">Home</a>
        </li>
        <li className="text-white font-semibold hover:text-yellow-500">
          <a href="#about">About</a>
        </li>
        <li className="text-white font-semibold hover:text-yellow-500">
          <a href="#menu">Menu</a>
        </li>
        <li className="text-white font-semibold hover:text-yellow-500">
          <a href="#awards">Awards</a>
        </li>
        <li className="text-white font-semibold hover:text-yellow-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="">
        <a href="#" className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-1 px-4 border border-yellow-300 hover:border-transparent">
          Booking Sekarang -{'>'}
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
