import React from 'react';
import PropTypes from 'prop-types';
import AddressView from '../AddressView/AddressView';

class AddressList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAddressIndex: 2
        };
    }

    handleAddressSelect = index=>{
       this.setState({selectedAddressIndex: index});
            
        
    }

    render() {
        let {addrList} = this.props;
        let {selectedAddressIndex} = this.state;
        return (
            <div className="addrWrap">
                <div className="listWrap">
                    {addrList.map((addr, index)=><div key={index} onClick={()=> this.handleAddressSelect(index)} className='placeList'>{addr.Name}</div>)}
                </div>
            {selectedAddressIndex ? <div className='addressView'><AddressView address={addrList[selectedAddressIndex]} /></div>: null}
            </div>
        );
    }
}

export default AddressList;