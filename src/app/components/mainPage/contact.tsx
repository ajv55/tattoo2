'use client';
import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Background from '../background';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

const ContactSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    const t = useTranslations('Contact');

    const contactMe = t('contactMe');
    const email = t('email');
    const phone = t('phone');
    const name = t('name');
    const message = t('message');
    const sendMessage = t('sendMessage');

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

  return (
    <div ref={ref}
      className="bg-gradient-to-r flex w-full justify-evenly items-center relative from-black via-zinc-900 to-black py-16 px-4 sm:px-6 lg:px-8 text-center text-white"
    >
        <Background />
      <div  className="w-full  flex lg:flex-row flex-col justify-center items-center z-[400] mx-auto">
        <div className='w-[50%] flex flex-col justify-center items-center'>
        <motion.h2
        variants={{visible: {y: 0, opacity: 1}}}
          initial={{ y: -50, opacity: 0 }}
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-5xl font-bold mb-8 text-orange-500"
        >
          {contactMe}
        </motion.h2>
        <motion.p
        variants={{visible: {x: 0, opacity: 1 }}}
          initial={{ x: -100, opacity: 0 }}
          animate={mainControls}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg mb-4"
        >
          {email}: <a href={`mailto:artist@example.com`} className="text-orange-500 hover:underline">artist@example.com</a>
        </motion.p>
        <motion.p
        variants={{visible: {x: 0, opacity: 1}}}
          initial={{ x: 100, opacity: 0 }}
          animate={mainControls}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg mb-8"
        >
          {phone}: <a href={`tel:+1234567890`} className="text-orange-500  hover:underline">+1234567890</a>
        </motion.p>
        <motion.div
        variants={{visible: {scale: 1}}}
          initial={{ scale: 0 }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 2 }}
          className="flex  justify-center space-x-6 mb-8"
        >
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">
            <FaFacebook size={30} />
          </a>
        </motion.div>
        </div>

        <motion.form
        variants={{visible: { y: 0, opacity: 1}}}
          initial={{ y: 50, opacity: 0 }}
          animate={mainControls}
          transition={{ duration: 1, delay: 2.5 }}
          className=" bg-gradient-to-tr shadow-orange-400 from-black to-zinc-900 lg:w-[40%] w-[89%]  p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-orange-500">{name}</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-orange-500">{email}</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-orange-500">{message}</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            {sendMessage}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactSection;

