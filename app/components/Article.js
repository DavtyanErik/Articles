import React, { PureComponent } from 'react';
import { Card } from 'antd';

export default
class Article extends PureComponent {
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
	render() {
		return (
			<div style={this.articleStyle}>
				<article style={{ width: 500 }}>
					<h2 style={{ textAlign: 'center', marginBottom: 10 }}>
						{this.props.title}
					</h2>
					<p>{this.props.category}</p>
					<img style={{ height: 300, width: 500, marginTop: 20 }} src={this.props.picture || this.alt} />
				</article>
			</div>
		)
	}
}