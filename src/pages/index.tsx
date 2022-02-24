import Image from 'next/image';
import { FC } from 'react';
import NavBar from '../components/shared/Navbar';
import Hero from '../components/_Index/Hero';
import PrimaryButton from '../components/_Index/PrimaryButton';

const About: FC = () => {
  return (
    <div className="font-_Poppins ">
      <header className="">
        <NavBar />
        <Hero />
      </header>
      <main>
        <div className="relative bg-gray-100 py-20 mt-20 lg:mt-60">
          {/* Heading */}
          <div className="sm:w-3/4 lg:5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-indigo-500 mb-3">
              Features
            </h1>
            <p className="text-center text-gray-500">
              Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old.
            </p>
          </div>

          {/* Feature 1 */}
          <section className="relative mt-20 lg:mt-24">
            <div className="container mx-auto p-6 flex flex-col lg:flex-row items-center justify-center lg:space-x-40">
              <div className="flex w-5/6 sm:w-4/6 lg:w-2/5 justify-center z-10 mb-10 lg:mb-0 relative aspect-[3/2]">
                <Image
                  src="/images/illustration-features-tab-1.png"
                  layout="fill"
                  alt="Feature 1"
                  className="z-20 "
                />
              </div>
              <div className="relative flex flex-1 flex-col items-center lg:items-start">
                <h2 className="text-3xl text-indigo-500">
                  Bookmark in on click
                </h2>
                <p className="text-gray-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                  Contrary to popular belief, Lorem Ipsum is not simply
                  random text. It has roots in a piece of classical Latin
                  literature from 45 BC, making it over 2000 years old.
                </p>
                <PrimaryButton />
              </div>
            </div>
            <div className="absolute -left-36 -bottom-16 rounded-r-full bg-indigo-500 w-5/12 h-2/3 hidden lg:block"></div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
