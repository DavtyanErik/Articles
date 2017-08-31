export default (articles = [], action) => {
	switch (action.type) {
		case 'ADD_NEW_ARTICLES':
			console.log('ADD_NEW_ARTICLES fired');
			return [ ...articles, ...action.payload ];			
		default:
			return articles;
	}
}