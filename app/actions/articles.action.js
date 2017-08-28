const url = (num) => {
	return `http://content.guardianapis.com/search?show-fields=thumbnail&page=${num}&api-key=1d4be7b9-5113-4c3a-ba93-9a5a0998eb46`;
}

export const fetchArticles = (page) => {
	return dispatch => {
		fetch(url(page))
			.then(blob => blob.json())
			.then(articles => dispatch(addArticlesSync(articles.response.results)));
	}
}

const addArticlesSync = (payload) => {
	const type = 'ADD_NEW_ARTICLES';
	return { type, payload };
}