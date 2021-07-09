import React, {Component} from 'react';

const SearchBox = ({searchFields, onSearchChange}) => {
	return (
		<div className="pa2 ">
			<input 
			className="pa3 ba b--green bg-lightest-blue"
			type="search" 
			placeholder="Search Robot"
			onChange={onSearchChange}
			/>
		</div>
	)
};

export default SearchBox;