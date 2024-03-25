import React, { createContext, useState } from 'react'

export const SelectContext = createContext();

export default function SelectContextProvider({children}) {

    const [selected, setSelected] = useState(null);
    const value = {selected, setSelected};

  return (
    <SelectContext.Provider value={value}>
        {children}
    </SelectContext.Provider>
  )
}
