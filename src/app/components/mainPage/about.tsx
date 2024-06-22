'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Background from '../background';

const AboutSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    const t = useTranslations('About');

    const title = t('title');
    const description = t('description');

    useEffect(() => {
        if(isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

  return (
    <div className="bg-gradient-to-r relative from-black via-zinc-900 to-black py-12 px-4 sm:px-6 lg:px-8 text-white">
        <Background />
      <div ref={ref} className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center">
        <motion.img
        variants={{visible: {scale: 1, opacity: 1}}}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={mainControls}
          whileInView={{scale: 1}}
          whileHover={{scale: 1.05}}
          transition={{ duration: 1, stiffness: 80, type: 'spring' }}
          className="rounded-lg z-30 shadow-lg w-full lg:w-1/2 mb-6 lg:mb-0"
          src='/flower.jpg'
          alt="Artist in action"
        />
        <motion.div
        variants={{visible: {x: 0, opacity: 1 }}}
          initial={{ x: -100, opacity: 0 }}
          animate={mainControls}
          transition={{ duration: 1, delay: 0.7}}
          className="lg:w-1/2 lg:ml-12 text-center lg:text-left"
        >
          <h2   className="text-3xl font-extrabold mb-4">{title}</h2>
          <motion.p
          variants={{visible: { y: 0, opacity: 1 }}}
            initial={{ y: 50, opacity: 0 }}
            animate={mainControls}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg text-orange-500 mb-6"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
