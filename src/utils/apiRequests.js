import axios from 'axios';

export const getSpecificLeagueData = async (leagueCode) => {
  const { data } = await axios.get(`https://api.football-data.org/v2/competitions/${leagueCode}/standings?standingType=TOTAL`, {
    headers: {
      'X-Auth-Token': process.env.REACT_APP_API_KEY
    }
  });
  return data;
};

export const getSpecificLeagueScorers = async (leagueCode) =>{
  const { data } = await axios.get(`https://api.football-data.org/v2/competitions/${leagueCode}/scorers`, {
    headers: {
      'X-Auth-Token': process.env.REACT_APP_API_KEY
    }
  });
  return data;
};
