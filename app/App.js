import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Fail from './components/Fail';
import store from './reducers/store';
import Article from './components/Article';
import SingleArticle from './components/SingleArticle';

const App = () => {
	return (
			<Provider store={store}>
				<HashRouter>
					<Switch>
						<Route exact path='/' component={Layout} />
						<Route path='/article/:id' component={SingleArticle} />
						<Route path='*' component={Fail} />
					</Switch>
				</HashRouter>
			</Provider>
	);
}

render(
	<App />,
	document.getElementById("app")
);
