import {UPDATE_MUSIC} from '../actions/music';
const initialState={
    fetching: false,
	musicList: {
		title:"Hemsaye - Rüya",
		id:"710449648",
		uploaderUri:"https://soundcloud.com/hemsaye",
		uploader:"Hemsaye",
		url:"https://soundcloud.com/hemsaye/ruya-hemsaye"
	},
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