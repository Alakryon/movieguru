import axios from 'axios';

async function GraphQLRequest(url, query, parser, set_target) {
	let response = undefined;
	window.MovieGuru.GlobalCode.SetBusyPanelClass('BusyPanel');
	if (parser) {
		axios({
			url,
			method: 'post',
			data: JSON.stringify(query),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((result) => {
				if (result.data?.data !== null) {
					parser(result.data, set_target);
				} else {
					if (result.data?.errors) {
						console.log('ERROR in GraphQLRequest:\nURL:', url, '\nQUERY:', query, 'ERROR:', result.data.errors[0].message);
					}
					window.MovieGuru.GlobalCode.SetBusyPanelClass('BusyPanelHidden');
				}
			})
			.catch((error) => {
				console.log('ERROR in GraphQLRequest:', url, query, error);
				window.MovieGuru.GlobalCode.SetBusyPanelClass('BusyPanelHidden');
			});
	} else {
		try {
			response = await axios({
				url,
				method: 'post',
				data: JSON.stringify(query),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			});
		} catch (error) {
			console.log('ERROR in GraphQLRequest:', url, query, error);
			response = undefined;
		}
	}
	return response;
}

export default GraphQLRequest;
