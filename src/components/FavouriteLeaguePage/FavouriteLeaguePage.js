import React from 'react';
import './FavouriteLeague.css';
import { getSpecificLeagueScorers } from '../../utils/apiRequests';

export class FavouriteLeaguePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueScorers: null
    }
  }

  async componentDidMount() {
    const { match: { params: { league } } } = this.props;
    const leagueScorers = await getSpecificLeagueScorers(league);
    this.setState({ leagueScorers: leagueScorers.scorers })
  }

  renderTopScorers = scorerData => {
    return scorerData.map(scorer => (
        <div key={scorer.player.id}>
          <span>Name: {scorer.player.name}</span>
          <span>Team: {scorer.team.name}</span>
          <span>Number of goals: {scorer.numberOfGoals}</span>
        </div>
    ));
  };

  render() {
    const { leagueScorers } = this.state;
    if (!leagueScorers) return <div>Loading...</div>;
    return (
        <div>
          FavouriteLeaguePage
          Top scorers
          {this.renderTopScorers(leagueScorers)}
        </div>
    )
  }
}
