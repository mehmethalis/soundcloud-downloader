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
				url:'https://doc-0s-60-docs.googleusercontent.com/docs/securesc/4p572ih63d6b7mt0ljbp6f97s74itr6a/o8qmpbbs7tgb5abkmo53f1jtb5u3f0t2/1604320350000/08829262223383651302/08829262223383651302/1KH0vPmAYbjFuWBcTDtOD1Pef1PWX8ZUQ?e=download&authuser=0&nonce=7e4i61fljsa3k&user=08829262223383651302&hash=2i7u30gns1ubq09ankses9sk4jpg8vli'
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