'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from './portfolio';
import Background from '../background';
import { useTranslations } from 'next-intl';


const WelcomeSection = () => {

  const t = useTranslations('Welcome');

  const heading = t('heading');
  const subheading = t('subheading')

  return (
    <section
      id="hero"
      className="flex flex-col gap-4 items-center justify-center h-content bg-gradient-to-r from-black via-zinc-900 to-black relative"
    >
        <Background />
      <div className="text-center">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl mt-3 font-bold mb-4 bg-gradient-to-tr from-orange-600 via-orange-400 to-orange-800 bg-clip-text text-transparent"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl text-gray-500"
        >
          {subheading}
        </motion.p>
      </div>
      <Portfolio />
    </section>
  );
};

export default WelcomeSection;
