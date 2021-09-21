import React from 'react';
import {createContext, useState} from 'react';

export const AppContext = createContext({});

export default function AppProvider({children}) {
  const [aceptado, setAceptado] = useState(false);
  const [rechazado, setRechazado] = useState(false);
  const [dato, setDato] = useState({})

  return (
    <AppContext.Provider
      value={{aceptado, setAceptado, rechazado, setRechazado, dato, setDato}}>
      {children}
    </AppContext.Provider>
  );
}
