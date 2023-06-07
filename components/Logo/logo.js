
import LogoImage from '../../public/Logo.png'
import Image from 'next/image';

const Logo = ({w,h}) => {
  return (
    <div className="flex  justify-center items-center" >
      <Image src={LogoImage} alt="form"  className="rounded-full" width={w} height={h}  />


    </div>
  );
};

export default Logo;