import { FC } from 'react';
import NavBar from '../components/shared/Navbar';
import Hero from '../components/_Index/Hero';

const About: FC = () => {
  return (
    <div className="font-_Poppins ">
      <header className="container p-2 mx-auto">
        <NavBar />
        <Hero />
      </header>
      <main>
        <div className="bg-gray-100 h-screen"></div>
      </main>
    </div>
  );
};

export default About;
