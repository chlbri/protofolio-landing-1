import { FC } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import Image from 'next/image';

const Hero: FC = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-indigo-500 text-2xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
            Your bookmark Manager
          </h2>
          <p className="text-gray-600 text-lg text-center lg:text-left mb-6">
            A clean and simple interface to organize your favourite
            websites
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <PrimaryButton className="hover:bg-opacity-90">
              On Chrome
            </PrimaryButton>
            <SecondaryButton className="hover:text-gray-600">
              On Firefox
            </SecondaryButton>
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 relative w-5/6 md:w-2/3 lg:w-7/12 aspect-[3/2]">
          <Image
            src="/images/hero-bg.png"
            alt="Hero Image"
            layout="fill"
            className="z-20"
          />
          <div className="absolute -right-1/4 -bottom-20 rounded-l-full bg-indigo-500 w-full h-4/5 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
