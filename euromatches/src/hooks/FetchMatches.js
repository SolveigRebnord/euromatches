import { useState, useEffect, useCallback } from "react";
import { formatDate } from "../utils/utils";

export const FetchMatches = (urls, dato) => {
  const [matches, setMatches] = useState([]);
  const [allMatches, setAllMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllData = useCallback(async () => {
    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => response.json()),
    );
    const results = await Promise.all(fetchPromises);
    const data = results.flat();
    return data;
  });

  useEffect(() => {
    fetchAllData().then((combinedResults) => {
      setMatches(combinedResults);
      setAllMatches(combinedResults);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchAllData().then((combinedResults) => {
      const filteredMatches = combinedResults.filter(
        (match) => formatDate(match.timestamp) === formatDate(dato),
      );
      setMatches(filteredMatches);
    });
  }, [urls]);

  return { matches, loading, allMatches };
};

export default FetchMatches;
