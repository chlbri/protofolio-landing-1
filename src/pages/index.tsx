import { FC, useEffect } from 'react';
import NavBar from '../components/shared/Navbar';
import Features from '../components/_Index/Features';
import Hero from '../components/_Index/Hero';
import useLang from '../lib/locales';

//TODO: Internationalization

const Home: FC = () => {
  const { get, changeLanguage, lang } = useLang();
  useEffect(() => {
    console.log('translate =>', get('main.features.title'));
  });
  return (
    <div className="font-Poppins_">
      <header className="">
        <NavBar />
        <Hero />
      </header>
      <main>
        <Features />
        <button
          onClick={() => changeLanguage(lang === 'fr' ? 'en' : 'fr')}
        >
          Change
        </button>
      </main>
    </div>
  );
};

export default Home;
