import unirest from 'unirest';

export const UPDATE_MUSIC = 'UPDATE_MUSIC';
export const GET_MUSIC_ERROR = 'GET_MUSIC_ERROR';

export function updateMusic(newMusic) {
	return {
		type: UPDATE_MUSIC,
		payload: {
			music: newMusic
		}
	}
}

export function getMusic(link) {
	return async dispatch => {
		try {
			let req = unirest("GET", "https://getvideo.p.rapidapi.com/");

			req.query({
				"url": link
			});

			req.headers({
				"x-rapidapi-host": "getvideo.p.rapidapi.com",
				"x-rapidapi-key": "8aba0d461emshd735dadab1e1d48p1634bcjsna19fd88010eb",
				"useQueryString": true
			});
			await req.end((res)=>{
				dispatch(updateMusic(res.body));
			});
			
			
		} catch (e) {
			console.log(e);
		}
	}
}