import axios from 'axios';

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
							"x-rapidapi-key": "75ed2432a0msh2a4cc0c997df78fp1a8a24jsnf297df8f3534",
							"useQueryString": true
						}
			}).then(response =>response.data)
		 })
		
	}
}