export default (single = null, action) => {
	switch(action.type) {
		case 'FETCH_ARTICLE_BY_ID':
			return action.payload;
		case 'DELETE_ARTICLE':
			return null;
		default:
			return single;
	}
}