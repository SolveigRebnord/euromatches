import { useEffect, useState } from "react";
import { formatDate } from "../utils/utils";

/**
 * Returns the display of all match dates
 * @param {Array} allMatches - Total array of all matches
 * @param {Date} setDate - function to change the state of selected date
 * @param {Date} dato - Current selected date
 * @returns {HTMLElement} Returns JSX displaying filtered match dates
 */
export default function DateHandler({ allMatches, setDate, dato }) {
  const [filteredDates, setFilteredDates] = useState([]);
  const allDates = [];

  /**
   * Updates state of filteredDates with an array of all matches, sorted by play time
   * @param {Array} allMatches - Array of all matches
   * @returns {Array} The sorted array
   */
  useEffect(() => {
    setFilteredDates(
      allMatches.sort(
        (a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp),
      ),
    );
  }, [allMatches]);

  /**
   * Updates const allDates with the relevant match dates
   * @returns {Array} Array containing the match dates only
   */
  filteredDates.map((match) =>
    !allDates.includes(match.timestamp.slice(0, 10))
      ? allDates.push(match.timestamp.slice(0, 10))
      : null,
  );

  let index = 0;

  return (
    <div>
      <div className="header-layout">
        <div>
          <h1>Matches</h1>
        </div>
        <nav className="header-nav">
          <ul>
            {allDates.map((date) => (
              <li
                key={`${date}-${index}`}
                onClick={() => setDate(date)}
                className={`${date === dato && "active"} ${
                  formatDate(date) === formatDate(new Date()) && "today"
                }`}
              >
                <p>
                  {new Intl.DateTimeFormat("en-US", {
                    weekday: "short",
                  }).format(new Date(date))}
                </p>
                <p>
                  {" "}
                  <span>{new Date(date).getDate()}</span>
                  <span>
                    {new Intl.DateTimeFormat("en-US", {
                      month: "short",
                    }).format(new Date(date))}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
