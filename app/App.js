import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import store from './reducers/store';

const App = () => {
	return (
			<Provider store={store}>
				<Layout />
			</Provider>
	);
}

render(
	<App />,
	document.getElementById("app")
);
