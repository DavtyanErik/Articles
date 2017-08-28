export default (articles = [], action) => {
	switch (action.type) {
		case 'ADD_NEW_ARTICLES':
			console.log(action.payload)
			return [ ...articles, ...action.payload ];
		default:
			return articles;
	}
}