import { useContext } from "react";
import { ContextProvider, ContextType } from "../store/AppContext";

function useAppContext(): ContextType {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}

export default useAppContext;
