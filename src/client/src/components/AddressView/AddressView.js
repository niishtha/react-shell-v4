import React from "react";

const AddressView = ({address}) => {
	return <div>
        {Object.keys(address).map(key=>{
            return <div>
                <span>{key}</span><span>{address[key]}</span>
            </div>
        })}
    </div>

};

export default AddressView;