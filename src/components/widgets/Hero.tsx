// import Image from 'next/image';
import { HeroProps } from '~/shared/types';
// import CTA from '../common/CTA';
// import demo from '~/assets/images/camera-back.jpg';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="home">
      <div className="bg-white dark:bg-black-900 flex relative z-20 items-center overflow-hidden h-[50vh]">
        <div className="container mx-auto px-6 flex relative py-16 font-rubik font-thin">Start here</div>
      </div>
    </section>
  );
};

export default Hero;
 