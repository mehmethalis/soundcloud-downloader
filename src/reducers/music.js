import { UPDATE_MUSIC_FULFILLED,UPDATE_MUSIC_REJECTED,UPDATE_MUSIC_PENDING } from '../actions/music';

const initialState = {
	fetching: false,
	musicList: {
		title: "Hemsaye - Rüya",
		id: "710449648",
		uploaderUri: "https://soundcloud.com/hemsaye",
		uploader: "Hemsaye",
		url: "https://soundcloud.com/hemsaye/ruya-hemsaye",
		streams: [
			{
				filesize: '',
				url:'https://drive.google.com/file/d/1KH0vPmAYbjFuWBcTDtOD1Pef1PWX8ZUQ/view?usp=sharing'
			}]
	},
	error: {}
}

const music = (state = initialState, { type, payload }) => {
	switch (type) {
		case UPDATE_MUSIC_PENDING:
			return { ...state, fetching: true }
		case UPDATE_MUSIC_FULFILLED:
			return { ...state, musicList: payload,fetching:false }
		case UPDATE_MUSIC_REJECTED:
			return { ...state, error: payload,fetching:false }

		default:
			return state;
	}
}

export default music;