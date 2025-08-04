import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedTaxi, setSelectedTaxi] = useState(null);
  const [notification, setNotification] = useState("");

  return (
    <AppContext.Provider value={{
      selectedFlight,
      setSelectedFlight,
      selectedTaxi,
      setSelectedTaxi,
      notification,
      setNotification
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
