import i18next from 'i18next'
import BrowserLanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { ENV } from '../env'
import { DEFAULT_LANGUAGE } from './languages'

const { IS_DEV } = ENV

i18next
  .use(HttpBackend)
  .use(BrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    debug: IS_DEV,
    defaultNS: 'common',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      caches: ['cookie'],
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
