'use client';
import { useTranslations } from 'next-intl';
import { dancing_script } from '@/app/font/font';
import Link from 'next/link';
import { AiOutlineGlobal } from "react-icons/ai";
import { useState } from 'react';
import LanguageModal from './languageModal';
import { AnimatePresence } from 'framer-motion';

const Nav = () => {

  const t = useTranslations('Nav');

  const [isOpen, setIsOpen] = useState<boolean>(false)


  return (
    <nav className=" bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-white shadow-md py-4">
      <AnimatePresence>{isOpen && <LanguageModal onClose={() => setIsOpen(false)} />}</AnimatePresence>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo or Artist's Name */}
        <div className="flex-shrink-0">
          <Link className={`${dancing_script.className} font-bold text-3xl`} href="/">
            {t('logo')}
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:block">
          <ul className="flex space-x-6">
            <li>
              <Link className="text-orange-500 hover:text-orange-400" href="/">
              {t('home')}
              </Link>
            </li>
            <li>
              <Link className="text-orange-500 hover:text-orange-400" href="/portfolio">
                {t('portfolio')}
              </Link>
            </li>
            <li>
              <Link className="text-orange-500 hover:text-orange-400" href="/about">
                {t('about')}
              </Link>
            </li>
            <li>
              <Link href="/contact">
                {t('contact')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Call-to-action Button */}
        <div className='   flex gap-5 justify-center items-center'>
          <Link className="bg-orange-500 text-center hover:bg-orange-600 text-white font-bold py-2 lg:px-4 px-2 lg:text-xl text-sm rounded-md" href="/book">  
          {t('bookAppointment')}
          </Link>
          <AiOutlineGlobal onClick={() => setIsOpen(true)} className='hover:cursor-pointer' size={30} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
