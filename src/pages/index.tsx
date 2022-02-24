import { FC } from 'react';
import NavBar from '../components/shared/Navbar';
import Feature from '../components/_Index/Feature';
import Hero from '../components/_Index/Hero';

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
          <Feature
            title="Bookmark in on click"
            desc=" Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old."
          />
          <Feature
            title="Bookmark in on click"
            desc=" Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old."
            right
          />
        </div>
      </main>
    </div>
  );
};

export default About;
