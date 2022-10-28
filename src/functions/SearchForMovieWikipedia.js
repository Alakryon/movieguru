import WikipediaSearchRequest from './WikipediaSearchRequest';

async function SearchForMovieWikipedia(movie) {
	let wikipedia_data = await WikipediaSearchRequest(window.MovieGuru.GlobalData.WikipediaSearchURL.replace('<MOVIETITLE>', movie.name));
	let found_wiki = { url: undefined, pageid: undefined };
	let level_found = 0;
	if (wikipedia_data.status.toString() === '200') {
		if (wikipedia_data.data) {
			if (wikipedia_data.data.query) {
				for (let page in wikipedia_data.data.query.pages) {
					if (page !== '-1') {
						if (wikipedia_data.data.query.pages[page].title.includes(movie.name)) {
							if (level_found < 1) {
								found_wiki.url = wikipedia_data.data.query.pages[page].fullurl;
								found_wiki.pageid = page;
								level_found = 1;
							}
							if (wikipedia_data.data.query.pages[page].title.toLowerCase().includes('film')) {
								if (level_found < 2) {
									found_wiki.url = wikipedia_data.data.query.pages[page].fullurl;
									found_wiki.pageid = page;
									level_found = 2;
								}
								if (wikipedia_data.data.query.pages[page].title.includes(movie.releaseDate.slice(0, 4))) {
									if (level_found < 3) {
										found_wiki.url = wikipedia_data.data.query.pages[page].fullurl;
										found_wiki.pageid = page;
										level_found = 3;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	let wiki_page = {};
	if (found_wiki.url) {
		wiki_page = found_wiki;
	}
	return wiki_page;
}

export default SearchForMovieWikipedia;
