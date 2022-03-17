import React, {useState} from "react";
import EnglishMessages from './../languages/en-US.json'
import SpanishMessages from './../languages/es-AR.json'

const langContext = React.createContext();


function LangProvider({children}) {

    const [messages, setMessages] = useState(SpanishMessages);
    const [locale, setLocale] = useState('es-AR');




  return (
        <langContext.Provider value={{hola: "Hola soy Luciana"}}>
            {children}
         </langContext.Provider>
        

  )
}

export{ LangProvider, langContext}
