import React, { Component } from 'react';
import '../styles/Code.scss';

class Code extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			arrowLeft: '<',
			arrowRight: '>',
			keyLeft: '{',
			keyRight: '} ',
			tagName: this.props.tagName || '',
			values: this.props.prop || []
		};
	}
	
	render() {
		
		const props = this.state.values.map((prop, i) => {
			return (
				<span key={i}>
				<span className="code__props">{prop.name}</span>={this.state.keyLeft}
				{typeof prop.val === 'string' ? (
					<span className={'code__value-string'}>'{prop.val}'</span>
					) : (
						<span className={'code__value-int'}>{prop.val}</span>
						)}
						{this.state.keyRight}
						</span>
						);
					});
					
					return (
						<pre className="code">
						{this.state.arrowLeft}
						<span className="code__tag-name">{this.state.tagName} </span>
						{props}
						/{this.state.arrowRight}
						</pre>
						);
					}
				}
				
				export default Code;