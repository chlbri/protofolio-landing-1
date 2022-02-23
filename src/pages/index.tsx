import { FC } from 'react';

import NavBar from '../components/shared/Navbar';
import PrimaryButton from '../components/_Index/PrimaryButton';
import SecondaryButton from '../components/_Index/SecondaryButton';

const About: FC = () => {
  return (
    <div className="font-_Poppins ">
      <header>
        <NavBar />
      </header>
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
              <PrimaryButton>On Chrome</PrimaryButton>
              <SecondaryButton>On Firefox</SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
