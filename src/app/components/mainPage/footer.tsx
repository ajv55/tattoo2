
import { useTranslations } from 'next-intl';
import React from 'react';
import Link from 'next/link';

const Footer = () => {

  const t = useTranslations('FooterNav');

  const home = t('home');
  const portfolio = t('portfolio');
  const about = t('about');
  const contact = t('contact');

  const footerT = useTranslations('Footer');

  const copyright = footerT('copyright');
  const terms = footerT('terms');
  const privacy = footerT('privacy');


  return (
    <footer className="bg-gradient-to-r w-full from-black via-zinc-900 to-black py-8 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <nav className="flex  space-x-4 mb-4">
          <Link className="text-orange-500 hover:text-orange-400 transition-colors duration-200" href="/">
            {home}
          </Link>
          <Link className="text-orange-500 hover:text-orange-400 transition-colors duration-200" href="/portfolio">
            {portfolio}
          </Link>
          <Link className="text-orange-500 hover:text-orange-400 transition-colors duration-200" href="/about">
            {about}
          </Link>
          <Link className="text-orange-500 hover:text-orange-400 transition-colors duration-200" href="/contact">
            {contact}
          </Link>
        </nav>
        <p className="text-sm  w-full text-center tracking-wider text-gray-400 mb-4">&copy; {copyright}</p>
        <div className="flex  space-x-4">
          <Link className="text-gray-400 hover:text-gray-300 transition-colors duration-200" href="/terms">
            {terms}
          </Link>
          <span className="text-gray-400">|</span>
          <Link className="text-gray-400 hover:text-gray-300 transition-colors duration-200" href="/privacy">
            {privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
