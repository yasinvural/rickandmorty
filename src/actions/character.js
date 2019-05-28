import { CHARACTERLIST, CHARACTERDETAIL, EPISODENAME, CLEARDETAIL } from "../const/index";
import RickAndMortService from "../services/RickAndMortyService";
const rickAndMortService = new RickAndMortService();

export function getCharacterList(path="") {
  let returnData = rickAndMortService.getCharacters(path);
  return dispatch => {
    returnData.then(data => {
      dispatch({
        type: CHARACTERLIST,
        payload: data
      });
    });
  };
}

export function getCharacterById(id) {
  let returnData = rickAndMortService.getCharacterById(id);
  return dispatch => {
    returnData.then(data => {
      dispatch({
        type: CHARACTERDETAIL,
        payload: data
      });
    });
  };
}

export function getEpisodeNames(episodes){
  let returnData = rickAndMortService.getEpisodeNames(episodes);
  return dispatch => {
    returnData.then(data => {
      const episodes = data.map(episode => episode.name);
      dispatch({
        type:EPISODENAME,
        payload:episodes
      })
    })
  }
}

export function clearDetail(){
  return({
    type: CLEARDETAIL,
  })
}
