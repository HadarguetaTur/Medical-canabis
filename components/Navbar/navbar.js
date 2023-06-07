import React, { useState, useEffect } from 'react';
import Logo from '../Logo/logo';
import LetsTalkButton from '../Button/button';
import Image from 'next/image';
import avishar from '../../public/avishar.png'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 0);
      setShowContent(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav
      className={`fixed w-full bg-white transition-all duration-500 ${isSticky ? 'shadow-lg py-4 z-50' : 'py-6'
        }`}
      style={{ paddingLeft: '2rem', paddingRight: '2rem', opacity: showContent ? 1 : 0, visibility: showContent ? 'visible' : 'hidden' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex">
        <Logo w={80} h={80} />
        <Image src={avishar} alt="avishar"   width={50} height={50}  />     
        </div>
        <LetsTalkButton  />
      </div>
    </nav>
  );
};

export default Navbar;
