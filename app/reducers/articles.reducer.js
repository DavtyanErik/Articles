import { find } from 'lodash';

const sortPinned = (a, b) => a.pinned ? -1 : b.pinned ? 1 : 0;

const addNewest = (copy, news) => {
	news.forEach(element => {
		if (!find(copy, { id: element.id })) {
			copy.unshift(element);
		}
	});
	copy.sort(sortPinned);
	return copy;
}

const pin = (copy, id) => {
	const toPin = find(copy, { id });
	toPin.pinned = !toPin.pinned;
	copy.sort(sortPinned);
	return copy;
}

export default (articles = [], action) => {
	switch (action.type) {
		case 'ADD_NEW_ARTICLES':
			return [ ...articles, ...action.payload ];
		case 'CHANGE_PIN_ARTICLE':
			return pin([ ...articles ], action.payload);
		case 'LATEST_ARTICLES':
			return addNewest([ ...articles ], action.payload);
		default:
			return articles;
	}
}