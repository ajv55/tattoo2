'use client';
import { useRouter } from 'next/navigation';
import {useTranslations} from 'next-intl';

 
export default function Examples() {
  const t = useTranslations('Heading');
  const router = useRouter();

  const title = t('title');
  const [beforeWord, highlightWord, afterWord, endWord, lastWord] = title.split(' ');
  console.log(title.split(' '))

  const handleLocaleChange = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31316000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <div>
      <h1 className='text-indigo-400'>{t('title')}</h1>
      <h3>{lastWord || endWord} </h3>
      <button onClick={() => handleLocaleChange('en')}>english</button>
      <button onClick={() => handleLocaleChange('es')}>spanish</button>
    </div>
  );
}