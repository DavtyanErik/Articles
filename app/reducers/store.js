import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import articles from './articles.reducer';

const reducers = combineReducers({
	articles
});

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;