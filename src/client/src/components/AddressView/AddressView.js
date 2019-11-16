import React from "react";

const AddressView = ({address}) => {
	return <div>
        <div className='heading'>Selected Area Details:</div>
        {Object.keys(address).map(key=>{
            return <div key={key} className='areaKeys'>
                <span className="key">{key}:</span><span>{address[key]}</span>
            </div>
        })}
    </div>

};

export default AddressView;
