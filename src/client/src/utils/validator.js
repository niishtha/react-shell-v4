export default function validatePincode(pincode) {
    return (/^[1-9][0-9]{5}$/g).test(pincode);
}

//
  