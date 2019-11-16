import validatePincode from "../validator.js";

describe("ValidatePincode", () => {
  it("should validate 6 digit string begining non zero", () => {
    expect(validatePincode("110025")).toBe(true);
  });
  it("should validate 6 digit string begining non zero", () => {
    expect(validatePincode(110025)).toBe(true);
  });
  it("should validate 6 digit string begining non zero", () => {
    expect(validatePincode(110)).toBe(false);
  });
  it("should validate 6 digit string begining non zero", () => {
    expect(validatePincode('065001')).toBe(false);
  });
});
