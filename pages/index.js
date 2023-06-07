import React from 'react';
import {  faHandsHelping,  faHeart, faFileAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Header } from '@/components/Header/Header';
import { About } from '@/components/about/about';
import  Form  from '@/pages/form/form';
import Testimonials from '@/components/Testimonials/testimonials';
import Navbar from '@/components/Navbar/navbar';
import ServiceList from '@/components/ServiseList/serviceList';
import SpecialOffer from '@/components/SpecialOffer/spechialOffer';

export default function LandingPage() {
    const services = [
        {
          title:'מילוי שאלון רקע ',
          detail: 'שיספק לי תמונת מצב עכשווית על הרקע הרפואי, הטיפול התרופתי ואוסף התסמינים השונים ומידת חומרתם מהם את או אתה סובלים.',
          icon: faFileAlt,
        },
        {
          title: 'שיחה טלפונית/ זום / פגישה ',
          detail: 'הכוללת הדרכה מקיפה בהתאם למידת התעיינותך על הטיפול בקנאביס, אופן השפעתו על הגוף, השוני בין החומרים הפעילים שבו, תופעות לוואי אפשריות ודרכי התמודדות ו/או מניעתן. נדבר על צורות צריכה מומלצות בהתאם למטופל והחלק הכי חשוב- נבנה תוכנית טיפול מותאמת אישית בהתבסס על כל המידע שאקבל. ',
          icon: faUsers,
        },
        {
          title: 'קבלת טופס סיכום שיחה והמלצות',
          detail: 'על מנת שלא תצטרכו לזכור הכל בראש- תקבלו ממני טופס סיכום והמלצות של כל הנאמר במסגרת ההדרכה הפרונטלית.',
          icon: faHeart,
        },
        {
          title: 'ליווי שוטף ומעקב ',
          detail: 'במהלך תקופת ההסתגלות לתוכנית הטיפול ואם צריך תמיד אשמח לעזור גם מעבר. ',
          icon: faHandsHelping,
        },
      ];
      


    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Form/> 
            <Testimonials/>
            <ServiceList services={services}/>
            <SpecialOffer/>
        </div>
    );
}



