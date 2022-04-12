const Utils = require('../src/utils/utils');
const Constants = require('../src/utils/Constants');

test('Status Code OK - Case undefined', () => {
    const result = Utils.responseStatus(undefined);
    expect(result).toEqual(200);
});

test('Status Code BAD REQUEST - Case Error Validation', () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name);
    expect(result).toEqual(400);
});

test('Status Code CONFLICT - Case Error Duplicate', () => {
    const result = Utils.responseStatus(Constants.ErrorDuplicate.name);
    expect(result).toEqual(409);
});

test('Status Code NOT_FOUND - Case Error NotFound', () => {
    const result = Utils.responseStatus(Constants.ErrorNotFound.name);
    expect(result).toEqual(404);
});