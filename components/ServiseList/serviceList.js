import ServicePreview from '../ServicePreview/servicePreview';
import Image from 'next/image';
import FromImage from '../../public/hero02.jpeg'


const ServiceList = ({ services }) => {
  return (
    <div className='container mx-auto'>
      <div dir="rtl" className="grid relative grid-cols-1 md:grid-cols-2 gap-4  p-12">
        <div className="absolute inset-0">
          <Image src={FromImage} alt="form" layout="fill" objectFit="cover" className="opacity-10" />
        </div>
        {services.map((service, index) => (
          <ServicePreview key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
