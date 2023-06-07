import React from 'react';
import '../styles/globals.css';
import '../lib/fontawesome';
import { DM_Sans, DM_Serif_Display } from '@next/font/google';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
});


function MyApp({ Component, pageProps }) {
  return <main
    className={`${dmSans.variable} ${dmSerifDisplay.variable} font-body`
    }
  >
    <Component {...pageProps} />
  </main>
    ;
}

export default MyApp;
