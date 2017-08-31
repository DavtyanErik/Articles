import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArticles } from '../actions/articles.action';

import Infinite from 'react-infinite-scroll-component';
import { Spin } from 'antd';
import Article from './Article';

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
		this.props.fetchArticles();
	}
	render() {
		const renderArticles = this.props.articles.map(article => {
			const { id, webTitle, sectionName, fields } = article;
			const thumbnail = fields ? fields.thumbnail : undefined;
			return (
				<Article
					key={id}
					picture={thumbnail}
					title={webTitle}
					category={sectionName}
				/>
			)
		});
		return (
			<Infinite
				style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
				next={this.props.fetchArticles}
				hasMore
				loader={<Spin tip='Loading...' size='large' />}
			>
				{renderArticles}
			</Infinite>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);