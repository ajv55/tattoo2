'use client';
import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Background from '../background';
import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const testimonials = [
  {
    text: "Working with [Artist's Name] was an incredible experience. Their attention to detail and creative vision turned my tattoo idea into a work of art!",
    author: "Client 1"
  },
  {
    text: "Highly recommend [Artist's Name] for anyone looking for top-notch tattoo work. Professional, friendly, and extremely talented!",
    author: "Client 2"
  }
];

const Testimonials = () => {


    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    const t = useTranslations();

    const w = useTranslations('What');

    const what_our_clients_say = w('what_our_clients_say');

    const test = t.raw('testimonials');
    console.log(test)

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

  return (
    <div  className="bg-gradient-to-r flex flex-col justify-center items-center relative from-black via-zinc-900 to-black py-24 px-4 sm:px-6 lg:px-8 text-center text-white">
        <Background />
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">{what_our_clients_say}</h2>
        <div ref={ref} className="space-y-16 z-30">
          {test.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              variants={{visible: {opacity: 1, y: 0 }}}
              initial={{ opacity: 0, y: 50 }}
              animate={mainControls}
              transition={{ duration: 0.8, delay: index * 1 }}
              className="bg-black group hover:bg-gradient-to-br from-[#FF4301] via-orange-600  to-[#FF4301]  bg-opacity-25 border hover:text-zinc-900 border-zinc-800 p-8 rounded-xl shadow-lg"
            >
              <FaQuoteLeft className=" text-3xl mb-4 inline-block" />
              <p className="text-lg text-orange-400 group-hover:text-white font-semibold mb-4">{testimonial.text}</p>
              <FaQuoteRight className=" text-3xl mt-4 inline-block" />
              <p className="mt-6 text-orange-400 group-hover:text-white font-bold">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
    </div>
  );
};

export default Testimonials;
