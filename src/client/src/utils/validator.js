export default function validatePincode(pincode) {
    if(typeof(pincode) !== 'string') {
        pincode = pincode.toString();    
    }
    if(pincode.length !==6) {
        return false
    }
    if(pincode[0] == 0) {
        return false
    }
    return true;
    // return (/^[1-9][0-9]{5}$/g).test(pincode);
}
  