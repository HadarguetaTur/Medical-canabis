import React, { useEffect } from 'react';
import Image from 'next/image';
import HeroImage from '../../public/hero02.jpeg';
import { useState } from 'react';
import Logo from '../Logo/logo';
import LetsTalkButton from '../Button/button';




export function Header() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowContent(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <section className="text-center bg-#faf9f8 relative h-2/3 py-16 ">
      <div className="absolute inset-0">
        <Image
          src={HeroImage}
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-10"

        />
      </div>
      <div className="relative h-full flex flex-col justify-center p-8" style={{ opacity: showContent ? 0 : 1, visibility: showContent ? 'hidden' : 'visible' }}>
        <Logo w={150} h={150} />
        <span className='flex flex-col '>

          <h1 className=" mt-2 text-green-600 font-bold">יוליה סעד-אחות קאנביס</h1>
          <h2 className="m-2 ">יעוץ ליווי והדרכה הוליסטית </h2>
          <div className='mx-auto mt-10'>
          <LetsTalkButton />
          </div>
      
        </span>


      </div>
    </section>
  );
}
