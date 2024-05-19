import { globalContext } from "@/providers/GlobalContext";
import { useContext } from "react";

const useGlobalContext= () => {
  return useContext(globalContext)
};

export default useGlobalContext; 