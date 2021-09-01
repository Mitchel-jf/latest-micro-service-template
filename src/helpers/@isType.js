function isEmptyString(str) {
    return (!str || /^\s*$/.test(str));
}
function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true
}
function isObject(obj) {
    if (typeof obj === 'function' || Array.isArray(obj)) return false;
    return obj instanceof Object;
}
export { isEmptyString, isJson, isObject };