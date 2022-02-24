import { FC } from 'react';
import NavBar from '../components/shared/Navbar';
import Features from '../components/_Index/Features';
import Hero from '../components/_Index/Hero';

//TODO: Internationalization

const About: FC = () => (
  <div className="font-_Poppins ">
    <header className="">
      <NavBar />
      <Hero />
    </header>
    <main>
      <Features />
    </main>
  </div>
);

export default About;
