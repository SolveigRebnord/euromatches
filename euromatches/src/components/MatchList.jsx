import { findGroup, matchStatus } from "../utils/utils";
import "../styling/matchList.css";

const MatchList = ({ matches, groupIds }) => {
  return (
    <section className="match-section">
      {matches.map((match) => (
        <div key={match.id} className={`${match.matchStatusId !== 1 ? 'not-played': ''} match-card fade`}>
          <div className="top-match-card">
            <div>
              <p>
                <img height={18} src={`${match.homeTeam.logo.url}`} alt={`Flag of ${match.homeTeam.name}`}></img>
                {match.homeTeam.name}
              </p>
              <p>
                <img height={18} src={`${match.awayTeam.logo.url}`} alt={`Flag of ${match.awayTeam.name}`}></img>
                {match.awayTeam.name}
              </p>
            </div>
            <div>
              {match.matchStatusId !== 1 ? (
                <p>
                  {new Date(match.timestamp).toLocaleTimeString(undefined, {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              ) : (
                <div>
                  <p>{match.result.homeScore90}</p>
                  <p>{match.result.awayScore90}</p>
                </div>
              )}
            </div>
          </div>

          <hr></hr>

          <div className="bottom-match-card">
            <div className="flex-col">
              <p className="stadium-name">
                <img src="./MapPin.svg" height={18} alt="Placement Pin Icon"></img>
                {match.stadium.name}
              </p>
              <div>
                <span className="bold"> |</span>
                <p>
                  <span>Group </span>
                  {findGroup(match.stageId, groupIds)}
                </p>
              </div>
            </div>
            <div>
              <p>{matchStatus(match.matchStatusId)} </p>
              <span
                className={`${matchStatus(match.matchStatusId)} circle`}
              ></span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MatchList;
