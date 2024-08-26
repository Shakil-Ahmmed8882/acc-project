import { useEffect } from "react";

const useBodyScrollLock = (isSearch) => {
  useEffect(() => {
    if (isSearch) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isSearch]);
};

export default useBodyScrollLock;
