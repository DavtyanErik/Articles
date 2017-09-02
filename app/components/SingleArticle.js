import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArticleById, deleteArticle } from './../actions/single.action';
import { Button, Spin } from 'antd';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ single }) => {
	return { single }
}

const mapDispatchToProps = dispatch => bindActionCreators({
		fetchArticleById,
		deleteArticle
	}, dispatch);

class SingleArticle extends PureComponent {
	alt = 'http://peoplecancode-public.s3.amazonaws.com/cat.jpg';
	articleStyle = {
		height: 400,
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: 50
	}
	componentWillMount() {
		if(!this.props.single) {
			this.props.fetchArticleById(this.props.location.pathname.slice(8));
		}
	}
	render() {
		if(!this.props.single) {
			return (
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
					<Spin tip='loading' size={'large'} />
				</div>
			)
		}
		const { single: article } = this.props;
		const picture = article.fields ? article.fields.thumbnail : null;
		return (
			<div style={this.articleStyle}>
				<article style={{ width: 500 }}>
					<div style={{ display: 'flex' }}>
						<Button onClick={this.props.deleteArticle}>
							<Link to='/'>
								Back
							</Link>
						</Button>
						<h2
							style={{ textAlign: 'center', marginBottom: 10 }}
						>
							{article.webTitle}
						</h2>
					</div>
					<p>{article.sectionName}</p>
					<img
						style={{ height: 300, width: 500, marginTop: 20 }}
						src={picture || this.alt}
					/>
				</article>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle);