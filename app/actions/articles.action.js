export const apiKey = 'api-key=1d4be7b9-5113-4c3a-ba93-9a5a0998eb46';
export const apiName = 'http://content.guardianapis.com';

const url = num => {
	return `${apiName}/search?show-fields=thumbnail&page=${num}&${apiKey}`;
}

export const fetchArticles = () => {
	return dispatch => {
		fetch(url(pagination.next().value))
			.then(blob => blob.json())
			.then(articles => dispatch(addArticlesSync(articles.response.results)));
	}
}

function* makeIterator() {
	let index = 0;
	while (true) yield ++index;
}

const pagination = makeIterator();

const addArticlesSync = payload => {
	const type = 'ADD_NEW_ARTICLES';
	return { type, payload };
}

export const pinArticle = id => {
	const type ='CHANGE_PIN_ARTICLE';
	return { type, payload: id };
}

export const refresh = () => {
	return dispatch => {
		fetch(url(1))
			.then(blob => blob.json())
			.then(articles => dispatch(refreshSync(articles.response.results)));
	}
}

const refreshSync = payload => {
	const type = 'LATEST_ARTICLES';
	return { type, payload };
}