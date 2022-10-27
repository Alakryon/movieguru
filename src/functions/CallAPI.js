import axios from 'axios';

async function CallAPI(url, method, headers, body) {
	if (!method) {
		method = 'get';
	}
	if (!headers) {
		headers = {};
	}
	if (!headers['Content-Type']) {
		headers['Content-Type'] = 'application/json';
	}

	let request = {
		method,
		url,
		headers,
		body,
		responseType: 'json',
	};
	let response = undefined;

	try {
		response = await axios(request);
	} catch (error) {
		console.log('ERROR in CallAPI:', request, error);
		response = undefined;
	}

	return response;
}

export default CallAPI;
