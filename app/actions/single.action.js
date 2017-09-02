import { apiKey, apiName } from './articles.action';

export const fetchArticleById = id => {
	return dispatch => {
		fetch(`${apiName}${id}?${apiKey}&show-fields=thumbnail`)
			.then(blob => blob.json())
			.then(article => dispatch(fetchArticleByIdSync(article.response.content)));
	}
}

const fetchArticleByIdSync = payload => {
	const type = 'FETCH_ARTICLE_BY_ID';
	return { type, payload };
}

export const deleteArticle = () => {
	const type = 'DELETE_ARTICLE';
	return { type };
}