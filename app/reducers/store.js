import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import articles from './articles.reducer';
import single from './single.reducer';

const reducers = combineReducers({
	articles,
	single
});

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;