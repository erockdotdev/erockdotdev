import { useState, useEffect } from "react";

const useMediaQuery = (query: string, isLoaded: boolean) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    if (isLoaded) {
      return () => window.removeEventListener("resize", listener);
    }
  }, [matches, query, isLoaded]);

  return matches;
};

export default useMediaQuery;
