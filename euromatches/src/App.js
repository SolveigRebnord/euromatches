import { useState } from "react";
import "./styling/App.css";
import { formatDate } from "./utils/utils.js";
import DateHandler from "./components/DateHandler.jsx";
import FetchMatches from "./hooks/FetchMatches.js";
import MatchList from "./components/MatchList.jsx";

function App() {
  const [dato, setDate] = useState(new Date());

  const groupIds = [691296, 691297, 691300, 691298, 691299, 691301];
  const urls = groupIds.map(
    (id) => `https://api.nifs.no/stages/${id}/matches/`,
  );

  const { matches, loading, allMatches } = FetchMatches(urls, dato);

  return (
    <div className="App">
      <header>
        <a href="/">
          <img src="./euro-logo-2.png" className="logo" alt="Euro Games 2024 Logo" />
        </a>
        <DateHandler allMatches={allMatches} setDate={setDate} dato={dato} />
      </header>
      <main>
        <h2>{formatDate(dato)}</h2>
        {loading ? (
          <p>loading</p>
        ) : (
          <MatchList matches={matches} groupIds={groupIds} />
        )}
      </main>
      <footer>
        <img src="./euro-logo-2.png" height={80} alt="Euro Games 2024 Logo" />
      </footer>
    </div>
  );
}

export default App;
