'use client';
import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Background from '../background';
import style from '@/app/styles.module.css'
import { useTranslations } from 'next-intl';

const CallToAction = () => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    const t = useTranslations('Action');

    const heading = t('heading');
    const paragraph = t('paragraph');
    const buttonText = t('buttonText');

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

  return (
    <div
    ref={ref}
      className="bg-gradient-to-r  relative flex flex-col justify-center items-center  h-[23rem] from-[#FF4301] via-orange-600  to-[#FF4301]  py-24 px-4 sm:px-6 lg:px-8 text-center text-white"
    >
        <Background />
     
        <motion.h2
        variants={{visible: { y: 0, opacity: 1 }}}
          initial={{ y: 100, opacity: 0 }}
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-800"
        >
         {heading}
        </motion.h2>
        <motion.p
        variants={{visible: { y: 0, opacity: 1}}}
          initial={{ y: 100, opacity: 0 }}
          animate={mainControls}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg mb-8"
        >
          {paragraph}
        </motion.p>
        <Link
          href="/contact" // Update this to your actual booking/contact page URL
          className="inline-block z-30  hover:cursor-pointer px-6 py-3 text-lg font-light bg-zinc-800 text-white rounded-md hover:bg-zinc-900 hover:shadow-lg hover:font-extrabold hover:shadow-zinc-600 transition duration-300"
        >
          {buttonText}
        </Link>
    </div>
  );
};

export default CallToAction;
