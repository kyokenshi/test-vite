import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import languageEn from './en/translation.json'
import languageVi from './vi/translation.json'
import { initReactI18next } from 'react-i18next'

export const i18nInit = (): void => {
  // const defaultLang = 2 || 1

  // console.log(defaultLang, 'defaultLang')

  console.log(import.meta.env.MODE)

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: languageEn
        },
        vi: {
          translation: languageVi
        }
      },

      react: {
        useSuspense: false
      },
      lng: 'en',
      fallbackLng: 'en',
      debug: import.meta.env.MODE !== 'production',
      keySeparator: '.',
      interpolation: {
        escapeValue: false
      }
    })
}
