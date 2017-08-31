import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArticles, pinArticle, refresh } from '../actions/articles.action';
import { find } from 'lodash';
import Infinite from 'react-infinite-scroll-component';
import { Spin, Modal, Button } from 'antd';
import Article from './Article';

const mapStateToProps = ({ articles }) => {
	return { articles };
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		fetchArticles,
		pinArticle,
		refresh
	}, dispatch);
}

class Layout extends PureComponent {
	state = {
		article: null
	}
	componentDidMount() {
		this.props.fetchArticles();
		this.refresher = setInterval(this.props.refresh, 30000);
	}
	componentWillUnmount() {
		clearInterval(this.refresher);
	}
	pin = (id) => {
		this.props.pinArticle(id);
	}
	selectArticle = (id) => {
		const article = find(this.props.articles, { id });
		this.setState({ article });
	}
	render() {
		const RenderModal = () => {
			const { id, webTitle, sectionName, fields, pinned } = this.state.article;
			const thumbnail = fields ? fields.thumbnail : undefined;
			return (
				<Modal
					visible
					onCancel={() => this.setState({ article: null })}
					footer={[
            <Button key='done' type='primary' size='large' onClick={() => this.setState({ article: null })}>
              Done
            </Button>,
          ]}
				>
					<Article
						key={id}
						picture={thumbnail}
						title={webTitle}
						category={sectionName}
						pinned={pinned}
						pin={() => this.pin(id)}
						id={id}
						select={() => this.selectArticle(id)}
					/>
				</Modal>
			)
		}
		const renderArticles = this.props.articles.map(article => {
			const { id, webTitle, sectionName, fields } = article;
			const thumbnail = fields ? fields.thumbnail : undefined;
			return (
				<Article
					key={id}
					picture={thumbnail}
					title={webTitle}
					category={sectionName}
					pin={() => this.pin(id)}
					pinned={article.pinned}
					id={id}
					select={() => this.selectArticle(id)}
				/>
			)
		});
		return (
			<div>
				{ this.state.article ? <RenderModal /> : null }
				<Infinite
					style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
					next={this.props.fetchArticles}
					hasMore
					loader={<Spin tip='Loading...' size='large' />}
					pullDownToRefresh
					refreshFunction={this.props.refresh}
					releaseToRefreshContent={<h3>Refresh</h3>}
				>
					{renderArticles}
				</Infinite>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);