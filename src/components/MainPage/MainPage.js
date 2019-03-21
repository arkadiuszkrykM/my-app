import React from 'react';
import './MainPage.css';

export const MainPage = ({ leagues, addToFavourites }) => {
    return (
        <div className="MainPage-container">
          MainPage
          {leagues.map((league, index) =>
              <div
                  key={index}
                  className="MainPage-leagueRow"
                  onClick={() => addToFavourites({ name: league.area.name, code: league.code })}
              >
                Country: {league.area.name}, League: {league.name}
              </div>
          )}

        </div>
    )
  }
