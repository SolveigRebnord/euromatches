import { useState, useEffect, useCallback } from "react";
import { formatDate } from "../utils/utils";

/**
 * Combining function for fetching and filtering matches
 * @param {Array} urls -  Array of all fetching URLs
 * @param {Date} dato - Selected date
 * @returns {Object} Object containing fetched array of all matches, array of filtered matches and loading status
 */
export const FetchMatches = (urls, dato) => {
  const [matches, setMatches] = useState([]);
  const [allMatches, setAllMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Fetching with multiple URLs and returning the collected data
   * @returns {Array} Returns array of objects after promise is resolved, and the results combined
   */
  const fetchAllData = useCallback(async () => {
    //dokumentere denne-?
    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => response.json()),
    );
    const results = await Promise.all(fetchPromises);
    const data = results.flat();
    return data;
  }, [urls]);

  /**
 * Executing the fetch and updating state of both matches and allMatches
 * Dette må sees mer på:)
    @typedef {Object} fetchAllDataReturns - dette skal opp på forrige doku?
 * @property {Function} setMatches sets all matches from the fetch
 * @property {Function} setMatches sets all matches from the fetch
 * @property {Function} setAllMatches sets all matches from the fetch
   */
  useEffect(() => {
    fetchAllData().then((combinedResults) => {
      setMatches(combinedResults);
      setAllMatches(combinedResults);
      setLoading(false);
    });
  }, [dato]);

  /**
   * Executing fetch and filter by date
   * @returns {fetchAllDataReturns} but only results matching the selected date
   */
  useEffect(() => {
    fetchAllData().then((combinedResults) => {
      const filteredMatches = combinedResults.filter(
        (match) => formatDate(match.timestamp) === formatDate(dato),
      );
      setMatches(filteredMatches);
    });
  });

  return { matches, loading, allMatches };
};

export default FetchMatches;
