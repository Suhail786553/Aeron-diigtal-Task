'use client';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import Button from '../ui/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  const dropdownItems = {
    Health: ['Family Floater', 'Critical Illness', 'Personal Accident'],
    Motor: ['Car Insurance', '2 Wheeler Insurance', 'Pay As You Drive'],
    Others: ['Home Insurance', 'Travel Insurance', 'Fire Insurance'],
  };

  return (
    <header className="w-full shadow-sm border-b">
      <div className="hidden md:flex bg-gray-100 py-2 px-8 lg:px-24 flex justify-between items-center text-sm">
        <div className="flex items-center gap-6 text-black">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-600" />
            <span>+4444444444</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            <span>example@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-blue-600 text-lg cursor-pointer">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
      <nav className="flex items-center justify-between px-8 lg:px-24 py-4 bg-white relative">
        <div className="text-2xl font-bold text-blue-700">DEMO</div>
        <ul className="hidden md:flex gap-6 items-center font-semibold text-sm relative z-40">
          {Object.entries(dropdownItems).map(([menu, items]) => (
            <li
              key={menu}
              className='relative cursor-pointer'
              onMouseEnter={() => setOpenMenu(menu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="flex items-center gap-1 text-blue-600">
                {menu}
                <IoIosArrowDown
                  className={`transition-transform duration-200 ${openMenu === menu ? 'rotate-180' : ''}`}
                />
              </div>

              {openMenu === menu && (
                <ul className="absolute top-full left-0 bg-white shadow-md rounded-md min-w-[200px] z-50 pt-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="px-4 py-2 hover:bg-blue-100 text-gray-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="cursor-pointer text-gray-800">Raise A claim</li>
        </ul>

        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium">
          Log in
        </button>

        <div className="md:hidden" onClick={() => {
          setMobileMenuOpen(!mobileMenuOpen);
          setOpenMobileMenu(null);
        }}>
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </div>

        {mobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col p-4 md:hidden z-50 font-medium">
            {Object.entries(dropdownItems).map(([menu, items]) => (
              <li key={menu}>
                <div
                  className="py-2 flex items-center justify-between cursor-pointer"
                  onClick={() => setOpenMobileMenu(openMobileMenu === menu ? null : menu)}
                >
                  <span className={openMobileMenu === menu ? 'text-blue-600' : ''}>
                    {menu}
                  </span>
                  <IoIosArrowDown
                    className={`transition-transform ${openMobileMenu === menu ? 'rotate-180' : ''}`}
                  />
                </div>

                {openMobileMenu === menu && (
                  <ul className="pl-4 border-l-2 border-blue-100">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="py-2 text-gray-700 hover:text-blue-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="py-2">Raise A claim</li>
            <Button className="mt-2">
              Log in
            </Button>
          </ul>
        )}
      </nav>
    </header>
  );
};
