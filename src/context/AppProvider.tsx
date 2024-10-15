import React, { createContext, useState, useContext } from 'react';

interface AppContextType {
  // Add your global state properties here
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<AppContextType>({
    // Initialize your global state here
  });

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};