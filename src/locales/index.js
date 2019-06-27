import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.":
            `To get started, edit <1>src/App.js</1> and save to reload.`,
          "Sign up with email": `Sign up with email1`,
          welcome: `Hello <br/> <strong>World</strong>`
        }
      },
      de: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.":
            `Starte in dem du, <1>src/App.js</1> editierst und speicherst.`,
          "Welcome to React": `Willkommen bei React und react-i18next`
        }
      }
    },
    fallbackLng: `en`,
    debug: true,
    ns: [`translations`],
    defaultNS: `translations`,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
