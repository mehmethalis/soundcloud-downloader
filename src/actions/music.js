import axios from 'axios';

/******ACTION TYPES ****/
export const UPDATE_MUSIC_PENDING='UPDATE_MUSIC_PENDING';
export const UPDATE_MUSIC_FULFILLED = 'UPDATE_MUSIC_FULFILLED';
export const UPDATE_MUSIC_REJECTED='UPDATE_MUSIC_REJECTED';

export function getMusic(link) {
	return dispatch => {
		dispatch({
			type: "UPDATE_MUSIC",
			payload:axios.get('https://getvideo.p.rapidapi.com/', {
				params: { url: link },
						headers: {
							"x-rapidapi-host": "getvideo.p.rapidapi.com",
							"x-rapidapi-key": process.env.REACT_APP_API_KEY,
							"useQueryString": true
						}
			}).then(response =>response.data)
		 })
		
	}
}