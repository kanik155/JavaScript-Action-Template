"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert status string to number
 * Return 1 (Status.Success) if argument word contains "success"
 * Return 0 (Status.Failure) if argument word contains "fail"
 * @param status {string}
 */
function getStatus(status) {
    const lowercase_status = status.toLowerCase();
    if (lowercase_status.includes('success')) {
        return Status.Success;
    }
    else if (lowercase_status.includes('fail')) {
        return Status.Failure;
    }
    else {
        throw new Error('Allow words that contain "success" or "fail"');
    }
}
exports.getStatus = getStatus;
var Status;
(function (Status) {
    Status[Status["Failure"] = 0] = "Failure";
    Status[Status["Success"] = 1] = "Success";
})(Status = exports.Status || (exports.Status = {}));
