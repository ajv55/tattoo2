import React from 'react'
import { useTranslations } from 'next-intl'

export default function Why() {

    const t = useTranslations("Body");


  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-red-300 text-white font-medium text-3xl'>
        <h1>{t('title')}</h1>
        <h4>subheading title like wow
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis unde deleniti inventore esse molestiae sequi deserunt totam in modi illo neque rem harum, ut iusto quod, maiores sunt repellat!</p>
    </div>
  )
}
