import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { FavouriteLeaguePage } from './components/FavouriteLeaguePage/FavouriteLeaguePage';
import './App.css';
import { getSpecificLeagueData } from './utils/apiRequests';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiState: [],
      favourites: []
    }
  }

  async componentDidMount() {
    const premierLeagueData = await getSpecificLeagueData('PL');
    const otherLeagueData = await getSpecificLeagueData('SA');

    this.setState({ apiState: [premierLeagueData.competition, otherLeagueData.competition]})
  }

  addTeamToFavourites = (obj) => {
    console.log(obj)
    if (this.state.favourites.some(fav => fav.name === obj.name)) return;
    this.setState({ favourites: [...this.state.favourites, obj]});
  };

  render() {
    const { favourites, apiState } = this.state;
    console.log(apiState)
    if (!apiState.length) return <div>Loading..</div>;

    return (
      <div className="App">
        <div className="sticky">
          {favourites.map((fav, index) => <div key={index}><Link to={`/fav/${fav.code}`}>{fav.name}</Link></div>)}
        </div>
        <Switch>
          <Route
              path='/' exact
              render={() => <MainPage
                  addToFavourites={team => this.addTeamToFavourites(team)}
                  leagues={apiState}
              />}
          />
          <Route path='/fav/:league' component={FavouriteLeaguePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
