'use client';
import { dancing_script } from "@/app/font/font";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import style from '@/app/[locale]/styles.module.css';
import Background from "../background";

const Hero = () => {

  const t = useTranslations('Hero')
  const title = t("title");
  const [firstWord, secondWord, thirdWord, fourthWord, lastWord] = title.split(" ");
  
  const description1 = t('description1');
  const artist = t('artistName');
  const description2 = t('description2');


  return (
    <div
      
      className={` bg-gradient-to-r relative from-black via-zinc-900 to-black py-24 px-4 sm:px-6 lg:px-8 text-center text-white`}
    >
        <Background />
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-gray-100"
        >
          {firstWord} {secondWord} {thirdWord} {fourthWord === 'Masterpieces' ? '' : fourthWord} <span className=" bg-gradient-to-br from-orange-300 via-orange-500 to-orange-700 text-transparent bg-clip-text">{lastWord === 'Maestras' ? lastWord : fourthWord}</span>
        </motion.h1>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg mb-8 text-gray-300"
        >
          {description1} <span className={`${dancing_script.className} ml-2 text-4xl bg-gradient-to-br from-orange-900 via-orange-500 to-orange-400 bg-clip-text text-transparent`}>{artist}</span>
        </motion.p>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg mb-8 text-gray-500"
        >
          {description2}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
