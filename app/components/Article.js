import React, { PureComponent } from 'react';
import { Card, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

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
					<div style={{ display: 'flex' }}>
						<h2
							style={{ textAlign: 'center', marginBottom: 10 }}
						>
							<Link to={`/article/${this.props.id}`}>
								{this.props.title}
							</Link>
						</h2>
						<Checkbox
							onChange={this.props.pin}
							checked={this.props.pinned}
						>
							Pin
						</Checkbox>
					</div>
					<p>{this.props.category}</p>
					<img
						onClick={this.props.select}
						style={{ height: 300, width: 500, marginTop: 20 }}
						src={this.props.picture || this.alt}
					/>
				</article>
			</div>
		)
	}
}