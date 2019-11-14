import React from "react";

const Input = ({value, onChangeProp}) => {
	const onChange = e => {
		if (onChangeProp) {
			onChangeProp(e);
		}
	}
	return <input placeholder={value} onChange={onChange}/>;

};

export default Input;
