import React, {useState} from "react";
import EnglishMessages from '../languages/en-US.json'
import SpanishMessages from '../languages/es-AR.json'
import { IntlProvider } from "react-intl";


const langContext = React.createContext();

function LangProvider({children}) {

    const [messages, setMessages] = useState(SpanishMessages);
    const [locale, setLocale] = useState('es-AR');
 
    const setLanguage =(lenguage) => {
        
        switch (lenguage) {
            case ("es-AR") :
                setMessages(SpanishMessages)
                setLocale('es-AR')
                break;
            
            case ("en-US") :
                setMessages(EnglishMessages)
                setLocale('en-US')
                break;

            default:
                setMessages(SpanishMessages)
                setLocale('es-AR')
        }

    }


  return (
        <langContext.Provider value={{setLanguage:setLanguage}}>
            <IntlProvider locale={locale} messages={messages}>
              {children}
            </IntlProvider>
         </langContext.Provider>
        

  )
}

export{ LangProvider, langContext}
