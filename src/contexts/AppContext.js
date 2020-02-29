import React, { useContext, useState } from 'react';

export const AppContext = React.createContext();
export const useAppContext = () => useContext(AppContext);

// React Context API for managing global state
const AppContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        open,
        setOpen: (...p) => setOpen(...p)
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
