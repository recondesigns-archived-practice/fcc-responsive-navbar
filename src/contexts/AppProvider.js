import React, { useState } from "react";

export const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <AppContext.Provider value={[isMenuOpen, setIsMenuOpen]}>
      {children}
    </AppContext.Provider>
  );
}
