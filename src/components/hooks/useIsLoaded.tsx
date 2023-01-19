import { useState, useEffect } from "react";

const useIsLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);

  return isLoaded;
};

export default useIsLoaded;
