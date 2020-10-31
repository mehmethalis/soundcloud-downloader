import {UPDATE_MUSIC} from '../actions/music';
const initialState={
    fetching: false,
	musicList: {},
	error: {}
}

const music=(state=initialState,{ type, payload })=>{
    switch(type){
		case UPDATE_MUSIC:
            return {...state,musicList:payload.music}
            
		default:
			return state;
	}
}

export default music;