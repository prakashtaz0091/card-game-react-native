import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [message, setMessage] = useState < string > "";

  return (
    <GlobalContext.Provider
      value={{
        message,
        setMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
