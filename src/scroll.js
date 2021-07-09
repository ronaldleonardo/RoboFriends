import React, {Component} from 'react';
const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', 'borderTop': '3px solid rgba(161,242,255,0.5)', height: '500px'}}>
			{props.children}
		</div>
	)
};


export default Scroll;