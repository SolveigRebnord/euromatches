import { useEffect, useState } from "react";
import { formatDate } from "../utils/utils";

export default function DateHandler({ allMatches, setDate, dato }) {
  const [filteredDates, setFilteredDates] = useState([]);
  const allDates = [];

  useEffect(() => {
    setFilteredDates(
      allMatches.sort(
        (a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp),
      ),
    );
  }, [allMatches]);

  filteredDates.map((match) =>
    !allDates.includes(match.timestamp.slice(0, 10)) ? allDates.push(match.timestamp.slice(0, 10))
      : null
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
                className={`${date === dato && "active"} ${formatDate(date) === formatDate(new Date()) && "today"}`}
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
