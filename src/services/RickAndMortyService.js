import { get } from "./BaseService";
const BASEURL = "https://rickandmortyapi.com/api/";

export default class RickAndMortyService {
  getCharacters(path="") {
    if(path){
      return get(path);  
    }
    const url = `${BASEURL}character`;
    return get(url);
  }

  /*handleGetCharacters(result) {
    debugger
    if (result.ok) {
      return result.json();
    } else {
      alert("unexpected error occured !!!");
    }
  }*/

  getCharacterById(id) {
    const url = `${BASEURL}character/${id}`;
    return get(url);
  }

  getEpisodeNames(episodes) {
    return Promise.all(
      episodes.map(episode => get(episode))
    );
  }
}
