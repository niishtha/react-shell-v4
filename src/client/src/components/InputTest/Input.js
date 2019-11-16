import React from "react";

const Input = ({value, onChangeProp}) => {
	const onChange = e => {
		if (onChangeProp) {
			onChangeProp(e);
		}
	}
	return <input value={value} onChange={onChange}/>;
	// return null;

};

export default Input;
