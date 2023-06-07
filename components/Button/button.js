import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent('☘️היי יוליה! אשמח לקבל פרטים בנוגע לליווי, יעוץ והדרכה');
    const phoneNumber = '+9720523533069'; 

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
  };

  return (
    <button onClick={handleClick} className="bg-green-400 rounded-full mt-1 text-white py-2 px-2  rounded-full hover:bg-green-400 hover:text-white">
      <FaWhatsapp className='h-6 w-6' />
    </button>
  );
};

export default WhatsAppButton;