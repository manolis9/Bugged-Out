"use strict";
(function (STATUS) {
    STATUS[STATUS['Logged'] = 1] = 'Logged';
    STATUS[STATUS['Recreated'] = 2] = 'Recreated';
    STATUS[STATUS['In Progress'] = 3] = 'In Progress';
    STATUS[STATUS['Fixed'] = 4] = 'Fixed';
    STATUS[STATUS['Declined'] = 5] = 'Declined';
})(exports.STATUS || (exports.STATUS = {}));
var STATUS = exports.STATUS;
(function (SEVERITY) {
    SEVERITY[SEVERITY['Severe'] = 1] = 'Severe';
    SEVERITY[SEVERITY['Medium'] = 2] = 'Medium';
    SEVERITY[SEVERITY['Low'] = 3] = 'Low';
    SEVERITY[SEVERITY['Cosmetic'] = 4] = 'Cosmetic';
})(exports.SEVERITY || (exports.SEVERITY = {}));
var SEVERITY = exports.SEVERITY;
//# sourceMappingURL=constants.js.map