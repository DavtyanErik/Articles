import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArticles } from '../actions/articles.action';

const mapStateToProps = ({ articles }) => {
	return { articles };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		fetchArticles
	}, dispatch);
}

class Layout extends PureComponent {
	componentDidMount() {
		this.props.fetchArticles(1);
	}
	render() {
		return (
			<div>
				{this.props.articles.length}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);