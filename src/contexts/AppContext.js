import React, { useContext, useState } from 'react';

export const AppContext = React.createContext();
export const useAppContext = () => useContext(AppContext);

// React Context API for managing global state
const AppContextProvider = ({ children }) => {
  const [loadingRiskProfiles, setLoadingRiskProfiles] = useState(true);

  return (
    <AppContext.Provider
      value={{
        loadingRiskProfiles,
        setLoadingRiskProfiles: (...p) => setLoadingRiskProfiles(...p)
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
