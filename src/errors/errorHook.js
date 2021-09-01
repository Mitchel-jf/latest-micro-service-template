import { srcDir } from '../helpers/@filesystem';

function errorHook({ error, message, api, path, functionName }) {
    let errorMessage = {};
    if (process.env.NODE_ENV !== 'production' && error) errorMessage.error = error;
    if (api) errorMessage.api = `Error from API call : ${api}`;
    if (functionName) errorMessage.functionName = `Error from ${functionName}`;
    if (message) errorMessage.message = `${message}`;
    if (path) errorMessage.path = `${srcDir(path)}`;
    console.error('Error:', errorMessage);
    throw message;
}

/**
 * Error from API call: API name
 * Function Name: Error from functionName
 * Path: src/helpers/app/api_file.js 
 */

export default errorHook;