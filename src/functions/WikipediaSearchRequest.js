import axios from 'axios';

async function WikipediaSearchRequest(url, parser, set_target) {
	let response = undefined;
	window.MovieGuru.GlobalCode.SetBusyPanelClass('BusyPanel');
	if (parser) {
		axios({
			url,
			method: 'get',
		})
			.then((result) => {
				if (result.status?.toString() === '200') {
					parser(result, set_target);
				} else {
					console.log('ERROR in WikipediaSearchRequest:\nURL:', url, 'ERROR:', result);
					window.MovieGuru.GlobalCode.SetBusyPanelClass('BusyPanelHidden');
				}
			})
			.catch((error) => {
				console.log('ERROR in WikipediaSearchRequest:', url, error);
				window.MovieGuru.GlobalCode.SetBusyPanelClass('BusyPanelHidden');
			});
	} else {
		try {
			response = await axios({
				url,
				method: 'get',
			});
		} catch (error) {
			console.log('ERROR in WikipediaSearchRequest:', url, error);
			response = undefined;
		}
	}
	return response;
}

export default WikipediaSearchRequest;
