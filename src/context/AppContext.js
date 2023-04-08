import { createContext, useReducer } from "react";

import { appState } from "./utils/appState";
import { appReducer } from "./utils/appReducer";

const AppContext = createContext(appState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, appState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
