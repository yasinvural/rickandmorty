import { CHARACTERLIST, CHARACTERDETAIL, EPISODENAME, CLEARDETAIL, CLEARLIST } from "../const/index";
let initialState = {
  list: [],
  page: '',
  detail:{},
  episodeNames:[]
};

const character = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERLIST:
      return Object.assign({},state, {
        list: [...state.list,...action.payload.results],
        page: action.payload.info.next
      });
    case CHARACTERDETAIL:
      let {name,image,location,episode} = action.payload;
      let detail = {
        name,
        image,
        from:location.name,
        episodes: episode.slice(episode.length-5,episode.length)
      };
      return Object.assign({},state,{
        detail,
      })
    case EPISODENAME:
    return Object.assign({},state,{
      episodeNames: [...action.payload]
    })
    case CLEARLIST:
    return Object.assign({},state,{
      list: [],
      page: ''
    });
    case CLEARDETAIL:
    return Object.assign({},state,{
      episodeNames: [],
      detail: {}
    });
    default:
      return state;
  }
};

export default character;